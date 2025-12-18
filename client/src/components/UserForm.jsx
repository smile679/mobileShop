function UserForm({ handleSubmit }) {
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <label htmlFor="name" className="text-white">
          Name:
          <input
            type="text"
            id="name"
            placeholder="input your name here!"
            className="text-white border"
          />
        </label>
        <label htmlFor="email" className="text-white">
          Email :
          <input 
            type="email" 
            id="email" 
            placeholder="input your email here!" 
            className="border"
        />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            placeholder="input your message here!"
          ></textarea>
        </label>
        <button type="submit"> Submit </button>
      </form>
    </section>
  );
}

export default UserForm;