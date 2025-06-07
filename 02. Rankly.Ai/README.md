## Making a text-background radiant color:

```html
<h1
  className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center"
>
  AI SEO
</h1>
```

bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]

## lottieplayer

```js
npm install @dotlottie/player-component @dotlottie/react-player
```

## Ticker Animation:

```js
<motion.div
  initial={{ translateX: "-50%" }}
  animate={{ translateX: "0" }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: "linear",
  }}
  className="flex flex-none gap-14 pr-14 -translate-x-1/2"
>
  {[
    acmeLogo,
    apexLogo,
    celestialLogo,
    quantumLogo,
    pulseLogo,
    echoLogo,
    acmeLogo,
    apexLogo,
    celestialLogo,
    quantumLogo,
    pulseLogo,
    echoLogo,
  ].map((logo, index) => (
    <img src={logo} key={index} className="h-12 w-auto"></img>
  ))}
</motion.div>
```
