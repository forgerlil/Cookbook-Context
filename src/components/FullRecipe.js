import { useParams } from 'react-router-dom';

function FullRecipe() {
  const { recipe } = useParams();

  return (
    <div>
      <p>{`Full recipe for ${recipe} will be displayed here`} </p>
    </div>
  );
}

export default FullRecipe;
