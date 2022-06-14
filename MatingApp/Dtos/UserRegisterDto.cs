using System.ComponentModel.DataAnnotations;

namespace MatingApp.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        public string username { get; set; }
        [StringLength(100,MinimumLength =4,ErrorMessage ="the passwor must be more then 4 values and less then 8 values")]
        public string password { get; set; }
    }
}
