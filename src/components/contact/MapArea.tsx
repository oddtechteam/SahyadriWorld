 

const MapArea = () => {
  return (
    <>
       <div className="map-area-section section-padding pt-0 fix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="map-area">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482914.05898696335!2d73.16143608906246!3d18.985935200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd48dfd4d1867f%3A0x502f5a997e92dbb2!2sSahyadri%20School!5e0!3m2!1sen!2sin!4v1762090192095!5m2!1sen!2sin"
                         style={{border: "0px"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </>
  );
};

export default MapArea;