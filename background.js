// This method is called when the plug-in icon is clicked
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    // run.js 
    chrome.tabs.executeScript( activeTab.id , {file:'run.js'});
});

