# Interactive Wave Animation

3D wave animation created with Three.js and custom GLSL shaders. The animation features a dynamic point cloud that forms fluid wave patterns using Perlin noise, with real-time configurable parameters.

## Features

- Real-time interactive 3D wave animation
- Dual-wave system for complex patterns
- Interactive GUI controls for wave parameters
- Smooth camera controls with auto-rotation
- Performance monitoring with FPS counter
- Responsive design

## Quick Start

### Using npm (Recommended)

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Using Python (Alternative)

If you prefer a simple server without bundling:

```bash
# Start a simple HTTP server
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Controls

### Camera Controls
- **Rotate**: Click and drag
- **Zoom**: Mouse wheel or pinch gesture
- **Pan**: Right-click and drag

### Wave Parameters
All parameters can be adjusted in real-time using the control panel:

#### Wave 1
- **Frequency** (0.1 - 3.0): Controls wave density
- **Amplitude** (0.1 - 3.0): Controls wave height
- **Speed** (0.01 - 2.0): Controls wave movement

#### Wave 2
- **Frequency** (0.1 - 3.0): Controls secondary wave density
- **Amplitude** (0.1 - 3.0): Controls secondary wave height
- **Speed** (0.01 - 2.0): Controls secondary wave movement

## Project Structure

```
waves/
├── src/
│   ├── index.js          # Main application code
│   ├── core-utils.js     # Three.js utilities
│   └── assets/           # Static assets
├── index.html            # HTML entry point
└── package.json          # Project dependencies
```

## Dependencies

- Three.js (v0.146.0) - 3D graphics library
- dat.gui (v0.7.9) - Control interface
- Parcel - Development server and bundler

## Troubleshooting

### Port Issues
If you see "Port could not be used" when running `npm start`, the server will automatically select an available port. Look for the "Server running at http://localhost:XXXXX" message in the console.

### Loading Issues
- Make sure all dependencies are installed (`npm install`)
- Check browser console for errors (F12 or right-click -> Inspect)
- Ensure WebGL is enabled in your browser

### Performance Issues
- Reduce point size in the controls
- Lower wave frequencies
- Use Chrome or Firefox for best performance

## Browser Support

Tested and working in:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

To modify the wave behavior, edit the shader code in `src/index.js`:

```glsl
// Add a new wave pattern
pos.z += noise(rotate2d(PI / 3.) * pos.xy * u_noise_freq_3 + 
         u_time * u_spd_modifier_3) * u_noise_amp_3;
```

To modify colors, adjust the fragment shader:

```glsl
// Create custom color gradient
vec3 color = vec3(st.x, st.y * 0.5, sin(st.y));
gl_FragColor = vec4(color, 1.0);
```

## Credits

- Perlin noise implementation based on Morgan McGuire's work
- Three.js for the 3D graphics framework
- dat.GUI for the control interface 
