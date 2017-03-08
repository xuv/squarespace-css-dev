# Squarespace CSS Development

This is a little repo to get you started into modifying the Squarespace layouts without jumping into their developer mode.

We are making these assumptions:
- We are using a default SqSp template
- We just want to inject some additional CSS to tweak the default template
- We want to keep track and version our changes
- And do this using Chrome Dev Tools persistent mode

## Howto

0. Fork this repo in your Github user space and clone it locally
1. Go to your Squarespace website
2. Navigate to _Settings > Website > Advanced > Code Injection_
3. Add this line: `<link rel="stylesheet" type="text/css" href="//< your-github-username >.github.io/squarespace-css-dev/custom.css" />` in the _header_  
4. Reload your public facing Squarespace website and open **Chrome Dev Tools**
5. Look in _Sources_ for a folder named _< your-github-username >.github.io_
6. Right click on the _< your-github-username >.github.io/squarespace-css-dev_ subfolder, select _Add folder to workspace_ and point to the location on your disk where you cloned the fork of this repo.
7. Right click on the _< your-github-username >.github.io/squarespace-css-dev/custom.css_ file, select _Map to File System Resource…_ and point to the `custom.css` file you have in the local folder selected at the previous step
8. Edit that `custom.css` to see changes in the browser

During development, we are going to serve the custom.css file using Github-Pages. So others will be able to review our changes. When satisfied and done, we could just copy-paste the content of it into the "Custom CSS" input form from Squarespace. 
