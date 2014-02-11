angular-requestAnimationFrame.js
================================

ngAnimate makes use of a private factory $$animateReflow which wraps requestAnimationFrame. Unfortunately, if you want to execute a callback after an animation completes, $$animateReflow does so outside angular's digest. This wrapper is a safe alternative that executes any post-animation callbacks inside angular's digest, whilst still using angular's $$animateReflow wrapper for requestAnimationFrame
