import React, { useEffect } from 'react';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'aos/dist/aos.css';
import './footer.css'

function Function() {
    useEffect(() => {
      // 2 second animtion completeness
      Aos.init({ duration: 2000 });
    }, []);
  
    return (
        <footer className="bg-dark text-white pt-5 pb-4">

            <div className="container text-center text-md-left">

                <div className="row text-center text-md-left">
                    
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                        <p>I love chairman mao chairman mao is daddy also chairman deng is super daddy actually they are both super daddy</p>
                    </div>

                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                        <p><a href="#" className="text-white">Home</a></p>
                        <p><a href="#" className="text-white">About</a></p>
                        <p><a href="#" className="text-white">Products</a></p>
                        <p><a href="#" className="text-white">Vendors</a></p>
                        <p><a href="#" className="text-white">Contact</a></p>
                    </div>

                    <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
                        <p><a href="#" className="text-white">Home</a></p>
                        <p><a href="#" className="text-white">About</a></p>
                        <p><a href="#" className="text-white">Products</a></p>
                        <p><a href="#" className="text-white">Vendors</a></p>
                        <p><a href="#" className="text-white">Contact</a></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 cmx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                        <p>
                        <FontAwesomeIcon icon="fas fa-link" />
                        </p>
                    </div>
                </div>

                <div className="col-md-7 col-lg-8">
                    <p>Copyright 0202020 All rights reserved by:
                        <a href="#">
                            <strong className="text-warning">All American Doors & Windows</strong>
                        </a>
                    </p>
                </div>

                <div classNames="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                {/* favicons go here */}
                                <a href="#" className="btn-floating btn-sm text-white"></a> 
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
  }
  
  export default Function;
  