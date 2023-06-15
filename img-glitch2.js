function glitch2() {

    const s = (myp5Instance) => {

        myp5Instance.setup = () => {
            myp5Instance.createCanvas(640, 640);
            myp5Instance.glitch = new Glitch(myp5Instance);
            myp5Instance.loadImage("hearts--gitHash-de2718d--seed-984932-Medium.png", (im) => {
                myp5Instance.glitch.loadImage(im);
            });
        };

        myp5Instance.draw = () => {
            myp5Instance.glitch.resetBytes();
            myp5Instance.glitch.replaceBytes(100, 104);
            myp5Instance.glitch.randomBytes(1);
            myp5Instance.glitch.buildImage();
            myp5Instance.image(myp5Instance.glitch.image, 0, 0);
        };
    };
    return new p5(s);

}