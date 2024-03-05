import '../styles/NoPage.css';

function NoPage() {
  return (
    <div>
    <h1 className="title">404</h1>
    <p className='message'>Oeps! Pagina niet gevonden.</p>
    <p className='=message'>Ga terug naar <a className='=link' href="/">home</a>.</p>
  </div>
  );
}

export default NoPage;
