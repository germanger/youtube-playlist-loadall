# youtube-playlist-loadall
A Chrome extension that lets you display all the items from a youtube playlist

## Chromestore
This extension is available in Google Chromestore: https://chrome.google.com/webstore/detail/youtube-playlist-load-all/pbclhlmcclobinpephoflilgclodhnmf

## How it works

### background.js
When the `pageAction` icon is clicked, background.js will send a message **to** the content_script `youtube-playlist-loadall.js`, triggering the `clickLoadMoreUntilItDoesntExist()` function.

### youtube-playlist-loadall.js
A content_script that is triggered when the tab matches `*://*.youtube.com/*`. It watches every 700 ms if the following conditions are met:

- `location.pathname == '/playlist'`
- class `.load-more-button` exists
- class `.load-more-button` is not disabled

When these conditions are met, it tells `background.js` to display the icon in the address bar

`clickLoadMoreUntilItDoesntExist()` is self explanatory: it programatically clicks the "load more" button until it doesn't exist (youtube removes the button when all the items are fetched)

## Screenshot

![The extension](https://raw.githubusercontent.com/germanger/youtube-playlist-loadall/master/chromestore/promotional-440x280.jpg)
