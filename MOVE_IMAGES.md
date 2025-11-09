# Instructions to Fix Image Paths for Deployment

## Problem
Images are currently in `src/images/` but need to be in `public/images/` for proper deployment.

## Solution
Move all images from `src/images/` to `public/images/`

## Steps

### Option 1: Manual Move (Recommended)
1. Create a folder named `public` in the root directory (if it doesn't exist)
2. Create a folder named `images` inside `public` folder
3. Move all image files from `src/images/` to `public/images/`

### Option 2: Using PowerShell (Windows)
Run this command in PowerShell from the project root:

```powershell
# Create public/images directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\images"

# Copy all images from src/images to public/images
Copy-Item -Path "src\images\*" -Destination "public\images\" -Recurse
```

### Option 3: Using Command Prompt (Windows)
```cmd
mkdir public\images
xcopy /E /I /Y "src\images\*" "public\images\"
```

### Option 4: Using Terminal (Mac/Linux)
```bash
mkdir -p public/images
cp -r src/images/* public/images/
```

## Verification
After moving images, verify:
- All image files are in `public/images/` folder
- Image paths in `src/data/recipes.js` are now `/images/...` (already updated)
- Test the app with `npm run dev` to ensure images load correctly

## Note
The image paths in `recipes.js` have already been updated to use `/images/...` format, which will work correctly once images are in the `public/images/` folder.

