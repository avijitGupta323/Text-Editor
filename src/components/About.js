import React from "react";

export default function About(props) {
  return (
    <>
      <div>
        <div class={`card mb-3 mx-width p-5 pb-5 bg-${props.bg_color} text-${props.t_color}`}>
          <div class="row g-0">
            <div class="col-md-4"> 
              <img
                src={"static/img.jpg"}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Ran Segall</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturien pellentesque
                  eu, pretium <br></br>quis, sem. Nulla consequat massa quis t
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies
                  nec, pellentesque eu, pretium <br></br>quis, sem. Nulla
                  consequat massa quis enim. Donec pede justo, fringilla vel,
                  aliquet nec, vulputate eget, arcu. In enim justo, pellentesque
                  eu, pretium <br></br>quis, sem. Nulla consequat massa quis ut,
                  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                  pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                  elementum semper pellentesque eu, pretium <br></br>quis, sem.
                  Nulla consequat massa quis porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a,Nulla consequat massa quis porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a,Nulla consequat massa quis porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
