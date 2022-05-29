import React from "react";
import avi from "../../assets/img/avi.png";

export default function AboutMe() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <img src={avi} className="rounded img-fluid float-start" alt="avatar of Noah" />
        </div>
        <div className="col-8">
          <p>
            Donec id sollicitudin ipsum. Pellentesque tincidunt velit sit amet sem ultrices posuere. Nullam volutpat ornare ex, id ultrices neque lobortis a. Mauris euismod, magna vel vehicula auctor, felis mauris lobortis quam, tristique dictum
            turpis nunc a tellus. Vestibulum nec elit sit amet nisl mattis commodo vel a est. Donec quis gravida dolor. Sed eu hendrerit tortor. Quisque et scelerisque ipsum. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </div>
  );
}
