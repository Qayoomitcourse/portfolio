import { client } from '@/sanity/lib/client';

interface HeroSection {
  heading: string;
  heading2: string[];
}

async function getData(): Promise<HeroSection[]> {
  const fetchData = await client.fetch('*[_type == "heroSection"]');
  return fetchData;
}

export default async function Heroheading() {
  const data = await getData();

  return (
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {data.map((val) => (
        <span key={val.heading}>{val.heading}</span> 
      ))}
    </h1>
  );
}

export const Heroheading2 = async () => {
  const data = await getData(); 

  return (
    <div>
      {data.map((val) => (
        <div key={val.heading2.join(',')}> 
          {val.heading2.map((heading, idx) => (
            <h1 key={idx}>{heading},</h1> 
          ))}
        </div>
      ))}
    </div>
  );
};
