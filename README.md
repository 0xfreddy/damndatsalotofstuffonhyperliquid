# HyperEVM Ecosystem Visualization

A beautiful interactive graph visualization of the HyperEVM ecosystem featuring glassmorphism design and dynamic information panels.

## Features

- **Interactive Network Graph**: Explore 110+ real projects in the HyperEVM ecosystem
- **24 Categories**: Including DeFi, Trading, Tools, Analytics, NFT, and more
- **Dynamic Gradients**: Background changes based on selected category
- **Glassmorphism Design**: Modern glass-effect UI with blur and transparency
- **Project Information**: View project details, Twitter links, and logos
- **Responsive Design**: Works on desktop and mobile devices

## Ecosystem Overview

The visualization includes:
- **1 Central Node**: hyperEVM at the center
- **24 Category Nodes**: Organizing projects by type
- **110+ Project Nodes**: Real projects building on HyperEVM

### Categories Include:
- **DeFi & Trading**: Defi, Dex, Trading, Yield, LST
- **Infrastructure**: Infra, Oracle, Tools, Explorer
- **Social & Community**: Social, Community, Meme
- **Data & Analytics**: Data, Analytics, News
- **Specialized**: GambleFi, AI, NFT, RWA, Mobile, Investment, Stablecoin, Landing

## How to Run

### Option 1: Using Python (Recommended)
```bash
python3 run_server.py
```
This will automatically open the website in your browser at http://localhost:8000

### Option 2: Direct File Opening
Simply double-click `index.html` to open it in your default browser.

## Usage

1. **Explore the Ecosystem**: hyperEVM is at the center, connected to all categories
2. **Click Categories**: Select any category to see all projects and change the background
3. **Click Projects**: View project details and Twitter links
4. **Drag and Zoom**: Navigate the large graph with mouse controls
5. **Hover Effects**: See node highlights on hover

## Adding Project Logos

To add logos for projects:
1. Place logo files in the `/images/logos/` directory
2. Use the filename specified in the project data
3. Supported formats: PNG, JPG, SVG
4. Recommended size: 100x100px or square aspect ratio

## Technologies Used

- **vis.js**: Network graph visualization library
- **HTML5/CSS3**: Modern web standards
- **JavaScript**: Interactive functionality
- **Glassmorphism CSS**: Backdrop filters and glass effects

## Browser Compatibility

Works best in modern browsers that support:
- CSS backdrop-filter
- ES6 JavaScript
- Chrome, Firefox, Safari, Edge (latest versions)

## Project Data Structure

Each project includes:
```javascript
{
  id: 1,
  name: "Project Name",
  tags: ["Category1", "Category2"],
  twitter: "https://x.com/handle",
  logo: "/images/logos/project-logo.png"
}
```

## Customization

To add or modify projects:
1. Edit the `projects` array in `script.js`
2. Add the project with its categories (tags)
3. Include Twitter link and logo path
4. Projects can belong to multiple categories

To add new categories:
1. Add to the `tags` array
2. Define gradient in `categoryGradients`
3. Set color in `categoryColors` 