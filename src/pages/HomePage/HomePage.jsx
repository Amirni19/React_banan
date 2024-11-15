import style from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Catalog } from '../../components/CatalogComponent/Catalog'


export function HomePage() {
    return (
        <>
            <div className='container'>
                <div className="mt110">
                    <Catalog />
                </div>
            </div>
        </>
    )
}