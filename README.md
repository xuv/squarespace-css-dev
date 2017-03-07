# Squarespace CSS Development

Using Chrome Dev Tools persistent mode

0. Go to your Squarespace website
1. Navigate to _Settings > Website > Advanced > Code Injection_
2. Add this line: `<link rel="stylesheet" type="text/css" href="//xuv.github.io/squarespace-css-dev/custom.css" />`
3. Reload your public facing Squarespace website and open Chrome Dev Tools
4. Look in _sources_ for a folder named _xuv.github.io_
5. Right click on the _xuv.github.io/squarespace-css-dev_ subfolder and choose _Add folder to workspace_ and point to a location on your disk where you will keep track of your custom edited CSS file
6. Right click on the _xuv.github.io/squarespace-css-dev/custom.css_ file, select _Map to File System Resource…_ and point to the `custom.css` file you have in the local folder selected at the previous step.
7. Edit that `custom.css` to see changes in the browser.
