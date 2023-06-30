import React from "react"
 
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge); }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
 
 
function WebViewJavaScriptBridgeApp() {
 
    return (
        <div className="WebViewJavaScriptBridgeApp">
          <div>---------WebViewJavaScript---------</div>
          <div id="buttons"></div>
          <div id="log"></div>
          <div>
          {
              setupWebViewJavascriptBridge(function(bridge) {
                var uniqueId = 1
                function log(message, data) {
                  var log = document.getElementById('log')
                  var el = document.createElement('div')
                  el.className = 'logLine'
                  el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data)
                  if (log.children.length) { log.insertBefore(el, log.children[0]) }
                  else { log.appendChild(el) }
                }
             
                bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
                  log('ObjC called testJavascriptHandler with', data)
                  var responseData = { 'Javascript Says':'Right back atcha!' }
                  log('JS responding with', responseData)
                  if (responseCallback !== undefined) {
                     responseCallback(responseData)
                  }
                })
             
                document.body.appendChild(document.createElement('br'))
                if (document.getElementById('buttons') === null) {
                  setTimeout(function() {
                    document.getElementById('buttons').innerHTML = ""
                    var callbackButton = document.getElementById('buttons').appendChild(document.createElement('button'))
                    callbackButton.innerHTML = 'js 调用 OC方法'
                    callbackButton.onclick = function(e) {
                      e.preventDefault()
                      log('JS calling handler "testObjcCallback"')
                      bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function(response) {
                        log('JS got response', response)
                      })
                    }
                  },0)
                }
                 
              }) 
          }
          </div>
        </div>
      )
}
 
export default WebViewJavaScriptBridgeApp