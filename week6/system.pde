PImage img;
int s = 20;
void setup() {
  size(500, 500);
  img = loadImage("1.jpg");
}

void draw() {
  background(0);
  img.loadPixels();
  for (int i=0; i< img.width; i=i+s) {
    for (int j=0; j<img.height; j=j+s) {
      int index=i+j*img.width;
      noStroke();
      fill(img.pixels[index]);
      float d = dist(mouseX, mouseY, i, j);
      d = map(d, 0, height, 2, 0.1);
      float angle = map(d, 2, 0.1, 0, 2*PI);
      pushMatrix();
      translate(i,j);
      rotate(angle);
      rect(0+2*d, 0+2*d, s*d, s*d);
      popMatrix();
    }
  }
}
