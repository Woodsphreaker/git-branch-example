const test = () => {
  import('./div').then(({ default: fn }) => console.log(fn(10, 2)))
}

test()
