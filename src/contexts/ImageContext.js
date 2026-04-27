import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ImagesGrid from '../components/ImagesGrid';

const ImageContext = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [errorMsg, setErrorMsg] = useState(null);
    const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

    const col1 = photos.filter((_, i) => i % 3 === 0);
    const col2 = photos.filter((_, i) => i % 3 === 1);
    const col3 = photos.filter((_, i) => i % 3 === 2);
    useEffect(() => {
        const fetchData = async () => {
            if (page > 1) setLoading(true);
            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
                    {
                        headers: {
                            Authorization: API_KEY,
                        },
                    }
                );

                const data = await response.json();
                console.log(data);
                if (page > 1) {
                    setPhotos((prev) => [...prev, ...data.photos]);
                    setLoading(false);
                } else {
                    setPhotos(data.photos);

                }

            } catch (err) {
                // setErrorMsg(err.message);
                toast.error(err.message)
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    // from pexels
    // const imageIds = images.map(img => img.id);

    return (
        <ImagesGrid columns={[col1, col2, col3]} />
    )
}

export default ImageContext