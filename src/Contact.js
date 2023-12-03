// import styled from "styled-components";

const Contact = () => {
  return(<>
    <h3 className="text-center"> Feel Free To Contact Us </h3>
    <div className="container-fluid">
      <div className="row">
      <iframe class="gmap_iframe" width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1215&amp;height=353&amp;hl=en&amp;q=islamia college university peshawar&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row d-flex flex-row">

      <div className="col"></div>

      <div className="col">
        <form action="https://formspree.io/f/mdojjvrz" method="POST" >
          <input type="text" placeholder="Username" name="username" required autoComplete="off" /><br/><br/>
          <input type="email" placeholder="Email" name="email" required autoComplete="off" /><br/><br/>
          <textarea placeholder="enter your message" cols="50" rows="5" name="Message" required autoComplete="off" style={{resize: "none"}}></textarea><br/><br/>
        <input type="submit" value="send" className="btn btn-primary w-25" />
        </form>
      </div>

      <div className="col"></div>

    </div>
    </div>
</>
  )
};
  
export default Contact;
