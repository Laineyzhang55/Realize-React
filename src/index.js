const React = {
  createElement(...args) {
    console.log(args)
  }
};

let div = <div>hello </div>;
console.log(div);
