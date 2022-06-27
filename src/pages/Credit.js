import {useState} from 'react';

const Credit = () => {
  return (
    <section>
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h1>ATTRIBUTES</h1>
        <p className="credit-text">All icons used to help create this website were found on Flaticon</p>
      </div>

      <div 
        className="credit-container"
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '30px',
        }}
      >
        {/* PRODUCTS PAGE */}
        <a
          href="https://www.flaticon.com/free-icons/door"
          title="Door Icon"
          style={{ color: 'black', }}
        >
          Door icon created by kerismaker - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/window"
          title="Window Icon"
          style={{ color: 'black',  }}
        >
          Window icon created by winnievinzence - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/architecture"
          title="Molding Icon"
          style={{ color: 'black',  }}
        >
          Molding icon created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/door-knob"
          title="Hardware Icon"
          style={{ color: 'black',  }}
        >
          Hardware icon created by surang - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/gears"
          title="More Icon"
          style={{ color: 'black',  }}
        >
          More Icon created by Freepik - Flaticon
        </a>

        {/* OUR FEATURES SECTION */}
        <a
          href="https://www.flaticon.com/free-icons/construction"
          title="Local Icon"
          style={{ color: 'black',  }}
        >
          Local Icon created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/process"
          title="Service Icon"
          style={{ color: 'black',  }}
        >
          Service Icon created by Eucalyp - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/family"
          title="Family-Owned Icon"
          style={{ color: 'black', }}
        >
          Family-Owned Icon created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/floor"
          title="High-Quality Icon"
          style={{ color: 'black',  }}
        >
          High-Quality Icon created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/hammer"
          title="Customizable Icon"
          style={{ color: 'black',  }}
        >
          Customizable Icon created by Freepik - Flaticon
        </a>

        <a
          href="https://www.flaticon.com/free-icons/best-price"
          title="Affordable Icon"
          style={{ color: 'black',  }}
        >
          Affordable created by Freepik - Flaticon
        </a>
      </div>
    </section>
  );
};

export default Credit;
