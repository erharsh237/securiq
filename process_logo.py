import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_logo(input_path, output_light_path, output_dark_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_light_data = []
    new_dark_data = []

    for item in data:
        r, g, b, a = item
        # Make white background transparent
        if r > 240 and g > 240 and b > 240:
            new_light_data.append((255, 255, 255, 0))
            new_dark_data.append((255, 255, 255, 0))
        else:
            new_light_data.append(item)
            # If the pixel is dark (text), make it white for dark theme
            diff = max(abs(r-g), abs(g-b), abs(b-r))
            if r < 120 and g < 120 and b < 120 and diff < 30:
                # Replace dark with white, preserving alpha
                new_dark_data.append((255, 255, 255, a))
            elif r < 180 and g < 180 and b < 180 and diff < 30:
                 gray_val = (r + g + b) / 3
                 inv = int(255 - gray_val)
                 new_dark_data.append((inv, inv, inv, a))
            else:
                new_dark_data.append(item)

    img_light = Image.new("RGBA", img.size)
    img_light.putdata(new_light_data)
    img_light.save(output_light_path, "PNG")

    img_dark = Image.new("RGBA", img.size)
    img_dark.putdata(new_dark_data)
    img_dark.save(output_dark_path, "PNG")

if __name__ == "__main__":
    input_img = r"C:\Users\Paras Koul\.gemini\antigravity\brain\987261e9-6b1a-4c3c-8eb8-ecae24808d14\.user_uploaded\media__1784484173912.png"
    out_light = r"C:\Users\Paras Koul\.gemini\antigravity\scratch\securiq-dark\public\logo-light.png"
    out_dark = r"C:\Users\Paras Koul\.gemini\antigravity\scratch\securiq-dark\public\logo-dark.png"
    process_logo(input_img, out_light, out_dark)
    print("Logos processed successfully.")
