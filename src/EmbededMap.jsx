export default function EmbeddedMap({ latitude, longitude }) {
  //   const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzUyLjkiTiAxMDLCsDIwJzU4LjQiVw!5e0!3m2!1sen!2sus!4v1562149950983!5m2!1sen!2sus`;
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?&center=${latitude},${longitude}&zoom=15`;

  return (
    <div>
      <h1>My Embedded Google Map</h1>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        src={googleMapsUrl}
        allowFullScreen
        title="Embedded Google Map"
      ></iframe>
    </div>
  );
}
