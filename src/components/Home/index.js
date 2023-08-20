import AddNoteForm from '../AddNote';
import Notes from '../Notes';

function Home() {
  return (
    <div className="Home">
      <AddNoteForm />
      <Notes />
    </div>
  );
}

export default Home;
