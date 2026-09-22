from PIL import Image
import os

art_folder = r"c:\Users\Frans\Desktop\SANDAwebsite\purple-pulsar\public\images\art"

images = [
    "barna suef.png",
    "mente compleja.png",
    "MORNINGS IN ERICEIRA.png",
    "NIGHTSURFER_BCN.png",
    "sardana catalana.png",
    "sopelana recuadro.png",
    "SPARTAN_SANTJORDI_.png",
    "sueño ornitorrinco.png"
]

for img_name in images:
    img_path = os.path.join(art_folder, img_name)
    
    # Open image and convert to RGBA
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    # New data array - more aggressive threshold
    new_data = []
    for item in data:
        r, g, b, a = item[0], item[1], item[2], item[3]
        
        # If pixel is light (any color above 200) and grayish (R≈G≈B), make transparent
        if r > 200 and g > 200 and b > 200:
            new_data.append((255, 255, 255, 0))
        # Also catch off-white/light grays
        elif (r > 180 and g > 180 and b > 180) and abs(r-g) < 15 and abs(g-b) < 15 and abs(r-b) < 15:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(img_path, "PNG")
    print(f"Reprocessed: {img_name}")

print("Done! White and light gray removed.")
