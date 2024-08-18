import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h3>Explore Our Menu</h3>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a, nostrum impedit quas error enim at quasi eaque non aliquid, vitae asperiores dignissimos corporis dolor.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
