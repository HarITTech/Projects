import React from 'react'

const Team = () => {

    const teamMembers = [
        {
          name: "Alice Johnson",
          role: "Project Manager",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
        {
          name: "Bob Smith",
          role: "Lead Developer",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
        {
          name: "Charlie Brown",
          role: "UI/UX Designer",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
        {
          name: "David Wilson",
          role: "Marketing Head",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
        {
          name: "Emma Davis",
          role: "Software Engineer",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
        {
          name: "Franklin Lee",
          role: "Data Scientist",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VUAIsETs2BVS1XRsMmMv4YkyovdUxJRRvw&s",
        },
      ];
      
      
  return (
    <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Our Team</h2>
      <p className="mt-4 text-lg">Meet the dedicated professionals behind our success.</p>
    </div>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center">
          <img
            alt="Team member photo"
            className="w-32 h-32 rounded-full mx-auto"
            height="150"
            src={member.image}
            width="150"
          />
          <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
          <p className="text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Team
