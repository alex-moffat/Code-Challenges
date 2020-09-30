using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Challenge_20200930
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(myFunction("0000"));
            Console.WriteLine(myFunction("12345"));
            Console.WriteLine(myFunction("one253"));
            Console.WriteLine(myFunction(""));
            Console.ReadLine();
        }

        private static bool myFunction(String pin)
        {
            return (pin.Length == 4 || pin.Length == 6 && int.TryParse(pin, out _));                       
        }
    }
}
