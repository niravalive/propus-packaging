import fitz
import os
from PIL import Image
import io

pdf_path = '/Users/nirav/Downloads/Packaging web new/client/src/assets/Catalouge.pdf'
out_dir = '/Users/nirav/Downloads/Packaging web new/client/src/assets/products/'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)

product_names = [
    "Popcorn Tube", "Single Wall Hot Cup", "Cold Cup", "Double wall Cup",
    "Ripple Cup", "Popcorn Pouch", "French Fries", "Paper Trey Nacho's Trey",
    "Pizza Box", "Sandwich Box", "Burger Box"
]

def autocrop_image(image_bytes, ext):
    try:
        if ext.lower() not in ["png", "jpg", "jpeg", "webp"]:
            return image_bytes # Return original if we can't process
        
        img = Image.open(io.BytesIO(image_bytes))
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
            
        # Find bounding box of non-white pixels
        bg = Image.new(img.mode, img.size, (255, 255, 255, 255))
        diff = Image.composite(img, bg, img)
        bbox = diff.getbbox()
        
        if bbox:
            cropped = img.crop(bbox)
            out_bytes = io.BytesIO()
            cropped.save(out_bytes, format="PNG")
            return out_bytes.getvalue()
        return image_bytes
    except Exception as e:
        print(f"Crop failed: {e}")
        return image_bytes

for i in range(1, len(doc)): # pages 1-11 corresponds to products
    page = doc.load_page(i)
    name_obj = product_names[i-1].lower().replace(" ", "-").replace("'", "")
    out_path = os.path.join(out_dir, f"{name_obj}.png")
    
    # Strategy: Exclude zones where text exists.
    rect = page.rect
    
    # We'll calculate a 'safe zone' by looking at where text actually is
    # However, a simpler coordinate-based crop is often more reliable across varied illustrations.
    
    # logo is top-left, title/sizes are top-right to bottom-right.
    # Product is usually centered or slightly left.
    crop_rect = fitz.Rect(
        rect.width * 0.10,  # 10% from left
        rect.height * 0.25, # 25% from top (More aggressive to avoid logo)
        rect.width * 0.65,  # 65% width (Avoid right-side text)
        rect.height * 0.85  # 85% height
    )
    
    # Specific adjustment for wide items
    if "box" in name_obj or "trey" in name_obj:
        crop_rect.x1 = rect.width * 0.80 # boxes are often wider
        
    pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), clip=crop_rect)
    img_data = pix.tobytes("png")
    
    # Now autocrop the rendered portion to remove remaining whitespace
    cropped_bytes = autocrop_image(img_data, "png")
    
    with open(out_path, "wb") as f:
        f.write(cropped_bytes)
    print(f"Saved refined {name_obj}.png")
