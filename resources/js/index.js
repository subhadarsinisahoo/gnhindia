function onload()
{
    
    window.analytics.startTrackerWithId('UA-59105489-2');
    window.analytics.trackView('Home')
    window.analytics.debugMode();
}
function onclick()
{
    window.analytics.trackView('Home')
    window.analytics.debugMode();
}
function button()
{
    window.analytics.trackEvent('button', 'clicked')
}