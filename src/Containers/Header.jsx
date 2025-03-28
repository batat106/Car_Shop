import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSearchTerm(searchParams.get('search') || '');
    }, [location.search]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Обновляем URL сразу при изменении input
        if (location.pathname === '/cars') {
            navigate(`?search=${encodeURIComponent(value)}`, { replace: true });
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search or type"
                className="search-box"
                value={searchTerm}
                onChange={handleInputChange}
             />
            <img src="../images/profile_icon.png" className="img-profile"/>
        </div>
    )
}

export default Header;