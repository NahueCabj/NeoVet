// Team.jsx
import siteContent from "../data/siteContent";

export default function Team() {
  return (
    <section id="team" className="min-h-screen py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Equipo</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {siteContent.team.map((member) => (
          <div key={member.name} className="w-72 p-6 rounded-lg shadow-md bg-white">
            <img src={member.photo} alt={member.name} className="mx-auto mb-4 h-32 w-32 object-cover rounded-full" />
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-teal-700 mb-2">{member.role}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
