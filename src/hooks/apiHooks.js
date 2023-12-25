import useSWR from 'swr'



export function fetchWhatiDo(){
    const fetcher = async (url) => {
        const response = await fetch('/api/what-i-do');
        const data = await response.json();
        return data;
    }

    const { data, error, isLoading } = useSWR('/api/what-i-do', fetcher)

    return {
        data: data,
        isLoading,
        error: error
    }
}


export function fetchFeaturedProjects() {
    const fetcher = async (url) => {
        const response = await fetch('/api/featured-projects');
        const data = await response.json();
        return data;
    }

    const { data, error, isLoading } = useSWR('/api/featured-projects', fetcher)

    return {
        data: data,
        isLoading,
        error: error
    }
}

export function fetchaboutMe() {
    const fetcher = async (url) => {
        const response = await fetch('/api/about-me');
        const data = await response.json();
        return data;
    }

    const { data, error, isLoading } = useSWR('/api/about-me', fetcher)

    return {
        data: data,
        isLoading,
        error: error
    }
}



