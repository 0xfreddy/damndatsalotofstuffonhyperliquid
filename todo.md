# Todo: Remove Glowing Effects from Nodes

## Plan
1. Remove CSS glow effects from node hover states
2. Remove CSS glow effects from the central HyperEVM node
3. Remove JavaScript-based glow animations
4. Test the changes to ensure nodes display without glowing effects

## Tasks
- [x] Remove hover glow effects from project nodes in styles.css
- [x] Remove hover glow effects from category nodes in styles.css  
- [x] Remove HyperEVM canvas glow animation in styles.css
- [x] Remove JavaScript glow animation code in script.js
- [x] Test the application to verify glowing effects are removed

## Review
**Summary of Changes Made:**

1. **Removed hover glow effects from project nodes** - Eliminated the intense white glow box-shadow effects that appeared when hovering over project logo nodes, keeping only a subtle border color change and reduced scale transform.

2. **Removed hover glow effects from category nodes** - Removed the white glow effects from category text nodes on hover, keeping only a minimal scale transform.

3. **Removed HyperEVM canvas glow animation** - Eliminated the pulsing green glow animation that was applied to the entire canvas, removing both the CSS filter effects and the keyframe animation.

4. **Removed JavaScript glow animation code** - Cleaned up the JavaScript code that was creating additional CSS animations for the HyperEVM node pulsing effect.

**Impact:** The nodes now display with clean, minimal styling without any glowing effects while maintaining their basic hover interactions (border changes and subtle scaling). The application server is running successfully and ready for testing.