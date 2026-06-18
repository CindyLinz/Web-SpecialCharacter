#!/bin/bash

TARGET=$1

if [ "$TARGET" != "chrome" ] && [ "$TARGET" != "firefox" ]; then
  echo "Usage: ./package.sh [chrome|firefox]"
  exit 1
fi

echo "Packaging for $TARGET..."

BUILD_DIR="build_$TARGET"
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# Copy common files
cp manifest.json index.html popup.js icon128.png "$BUILD_DIR/"

if [ "$TARGET" == "firefox" ]; then
  echo "Adding Firefox specific settings..."
  python3 -c "
import json
with open('$BUILD_DIR/manifest.json', 'r') as f:
    data = json.load(f)
data['browser_specific_settings'] = {
    'gecko': {
        'id': 'web-special-character@cindylinz.github.io'
    }
}
with open('$BUILD_DIR/manifest.json', 'w') as f:
    json.dump(data, f, indent=2)
"
fi

ZIP_NAME="${TARGET}_addon.zip"
rm -f "$ZIP_NAME"
(cd "$BUILD_DIR" && zip -q -r "../$ZIP_NAME" .)

echo "Done! Created $ZIP_NAME"
rm -rf "$BUILD_DIR"
