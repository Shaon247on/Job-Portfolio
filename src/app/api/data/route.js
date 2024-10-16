export async function GET(req) {
    // Define your data directly in the API route
    const data = [
        { "Image": "https://i.ibb.co.com/9vcbzw9/App-Design-1.jpg", "Category": "App Design", "Name": "Mobile App Interface" },
        { "Image": "https://i.ibb.co.com/hdDwtp7/Graphic-Design-1.jpg", "Category": "Graphic Design", "Name": "Logo Design" },
        { "Image": "https://i.ibb.co.com/sHZ9VGC/UI-UX-1.jpg", "Category": "UI/UX", "Name": "Wireframe Layout" },
        { "Image": "https://i.ibb.co.com/cxB3Bxc/Web-Design-1.jpg", "Category": "Web Design", "Name": "Landing Page Design" },
        { "Image": "https://i.ibb.co.com/yN6dxGK/App-Design-2.jpg", "Category": "App Design", "Name": "E-commerce App" },
        { "Image": "https://i.ibb.co.com/71vN66x/Graphic-Design-2.jpg", "Category": "Graphic Design", "Name": "Poster Design" },
        { "Image": "https://i.ibb.co.com/q0zsFtV/UI-UX-2.jpg", "Category": "UI/UX", "Name": "Prototype Creation" },
        { "Image": "https://i.ibb.co.com/d7wCZPC/Web-Design-2.jpg", "Category": "Web Design", "Name": "Portfolio Website" },
        { "Image": "https://i.ibb.co.com/qsw4r4M/App-Design-3.jpg", "Category": "App Design", "Name": "Social Media App" },
        { "Image": "https://i.ibb.co.com/18161kC/Graphic-Design-3.jpg", "Category": "Graphic Design", "Name": "Brochure Design" },
        { "Image": "https://i.ibb.co.com/phvnq4F/UI-UX-3.jpg", "Category": "UI/UX", "Name": "Usability Testing" },
        { "Image": "https://i.ibb.co.com/Sc5szd2/Web-Design-3.jpg", "Category": "Web Design", "Name": "E-commerce Website" }
    ];

    // Parse the URL to get the category parameter
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    // Filter data based on the category if provided
    const filteredData = category ? data.filter(item => item.Category === category) : data;

    return new Response(JSON.stringify(filteredData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
