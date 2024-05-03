using System;
using System.Collections.Generic;

namespace API_Demo.Models;

public partial class StaffInTask
{
    public int Id { get; set; }

    public int? Idstaff { get; set; }

    public int? Idtask { get; set; }
}
