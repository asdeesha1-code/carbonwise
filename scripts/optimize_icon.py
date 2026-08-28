from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/carbonwise-icon.png')
project = Path('/home/ubuntu/carbonwise/assets/images')
image = Image.open(source).convert('RGBA')
image.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
for name in ['icon.png', 'splash-icon.png', 'favicon.png', 'android-icon-foreground.png']:
    image.save(project / name, format='PNG', optimize=True, compress_level=9)
