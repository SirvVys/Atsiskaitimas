
function CharacterCard(task) {


  return (
    <>
      <div>
        <h2>{task.name}</h2>
        <img src={task.url} alt="" />
        <p>{task.name}, {task.job}, {task.age}</p>
      </div>
    </>
  );
}

export default CharacterCard;
