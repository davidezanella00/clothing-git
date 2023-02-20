import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({categories}) => {
    return(
        <div className='directory-container'>

      {categories.map((category) => (    //destructuring the title
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
    );
}

export default Directory;