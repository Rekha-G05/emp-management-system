public class UserService : IUserService
{
    public User Authenticate(string username, string password)
    {
   
        if (username == "admin" && password == "admin@123")
        {
            return new User { Username = username };
        }
        return null;
    }
}
