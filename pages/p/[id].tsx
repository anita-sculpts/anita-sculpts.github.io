import { NextPage } from 'next';
import { useRouter } from 'next/router';

const SculpturePage: NextPage = () => {
    const router = useRouter();
    
    return (
        <div>
            {router.query.id}
        </div>
    );
};

export default SculpturePage;