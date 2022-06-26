import React from 'react';

const Credit = () => {
  return (
    <section>
      <h1 style={{ textAlign: 'center', padding: '30px' }}>CREDITS</h1>
      <p>All icons used to help create this website were found on Flaticon</p>

      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* PRODUCTS PAGE */}
        <a href="https://www.flaticon.com/free-icons/door" title="door icons">
          Door icons created by kerismaker - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/window"
          title="window icons"
        >
          Window icons created by winnievinzence - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/door-knob"
          title="door knob icons"
        >
          Door knob icons created by surang - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/architecture"
          title="architecture icons"
        >
          Architecture icons created by Freepik - Flaticon
        </a>

        {/* OUR FEATURES SECTION */}
        <a
          href="https://www.flaticon.com/free-icons/construction"
          title="construction icons"
        >
          Construction icons created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/hammer"
          title="Customizable Icon"
        >
          Hammer icons created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/best-price"
          title="Affordable Icon"
        >
          Best price icons created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/family"
          title="Family-Owned Icon"
        >
          Family icons created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/process"
          title="Service Icon"
        >
          Process icons created by Eucalyp - Flaticon
        </a>
      </div>
    </section>
  );
};

export default Credit;
