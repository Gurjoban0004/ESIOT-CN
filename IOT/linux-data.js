// Linux subject data.
// Primary organized source: Linux/Linux_Organized_Prep.md
// Supporting sources:
// - Linux/linux.jpeg
// - Linux/MCQ Practice solution.pdf
// - Linux/Shell_Scripting_CODING.pdf

const LINUX_MCQ_BANK = [
  {
    unitName: "ST-1 MCQs",
    examGroup: "st1",
    questions: [
      {
        id: 3001,
        source: "organized-prep",
        topic: "Linux distributions",
        question: "Which option best describes a Linux distribution?",
        options: {
          a: "A shell script used only for installing packages",
          b: "Only the Linux kernel without user tools",
          c: "A complete operating system package built around the Linux kernel with tools, package manager, and defaults",
          d: "A hardware device used to boot Ubuntu"
        },
        correct: "c",
        explanation: "A distribution packages the Linux kernel with tools, repositories, defaults, and a package manager."
      },
      {
        id: 3002,
        source: "organized-prep",
        topic: "Basic commands",
        question: "Which command is used to print the current working directory?",
        options: {
          a: "pwd",
          b: "whoami",
          c: "uname",
          d: "hostname"
        },
        correct: "a",
        explanation: "`pwd` prints the present working directory."
      },
      {
        id: 3003,
        source: "organized-prep",
        topic: "File manipulation",
        question: "Which command is used to create an empty file or update its timestamp?",
        options: {
          a: "mkdir",
          b: "rmdir",
          c: "clear",
          d: "touch"
        },
        correct: "d",
        explanation: "`touch` updates timestamps and creates an empty file if it is missing."
      },
      {
        id: 3004,
        source: "organized-prep",
        topic: "Permissions",
        question: "Which command is used to change file permissions?",
        options: {
          a: "chown",
          b: "chmod",
          c: "passwd",
          d: "groupadd"
        },
        correct: "b",
        explanation: "`chmod` changes read, write, and execute permissions."
      },
      {
        id: 3005,
        source: "organized-prep",
        topic: "Ownership",
        question: "Which command is used to change the owner of a specific file?",
        options: {
          a: "chown",
          b: "chmod",
          c: "umask",
          d: "usermod"
        },
        correct: "a",
        explanation: "`chown` changes file ownership."
      },
      {
        id: 3006,
        source: "organized-prep",
        topic: "Disk partitions",
        question: "Which command displays the partition table of a disk such as `/dev/sda`?",
        options: {
          a: "df -h /dev/sda",
          b: "mount /dev/sda",
          c: "fdisk -l /dev/sda",
          d: "du -sh /dev/sda"
        },
        correct: "c",
        explanation: "`fdisk -l /dev/sda` lists partition information for that disk."
      },
      {
        id: 3007,
        source: "organized-prep",
        topic: "File management",
        question: "Which command is used to remove a directory along with all its contents?",
        options: {
          a: "rmdir",
          b: "rm -r",
          c: "del -r",
          d: "remove -a"
        },
        correct: "b",
        explanation: "`rm -r` recursively removes a directory tree."
      },
      {
        id: 3008,
        source: "organized-prep",
        topic: "System information",
        question: "Which command displays free and used memory in the system?",
        options: {
          a: "vmstat",
          b: "iostat",
          c: "top",
          d: "free"
        },
        correct: "d",
        explanation: "`free` reports memory usage."
      },
      {
        id: 3009,
        source: "organized-prep",
        topic: "File viewing",
        question: "Which command shows the first 10 lines of a file?",
        options: {
          a: "head",
          b: "tail",
          c: "more",
          d: "less"
        },
        correct: "a",
        explanation: "`head` shows the beginning of a file."
      },
      {
        id: 3010,
        source: "organized-prep",
        topic: "File viewing",
        question: "Which command shows the last 20 lines of a file named `system.log`?",
        options: {
          a: "head -20 system.log",
          b: "cat -20 system.log",
          c: "tail -20 system.log",
          d: "less -20 system.log"
        },
        correct: "c",
        explanation: "`tail -20 system.log` displays the final 20 lines."
      },
      {
        id: 3011,
        source: "organized-prep",
        topic: "Filesystems",
        question: "Which file system type is the default used by Ubuntu for primary partitions?",
        options: {
          a: "NTFS",
          b: "ext4",
          c: "FAT32",
          d: "xfs"
        },
        correct: "b",
        explanation: "Ubuntu commonly uses `ext4` as the default primary filesystem."
      },
      {
        id: 3012,
        source: "organized-prep",
        topic: "Standard streams",
        question: "What does the `stdin` standard stream represent?",
        options: {
          a: "Standard output to the terminal",
          b: "Standard error messages",
          c: "System log input",
          d: "Standard input from the keyboard"
        },
        correct: "d",
        explanation: "`stdin` is standard input and uses file descriptor 0."
      },
      {
        id: 3013,
        source: "organized-prep",
        topic: "Standard streams",
        question: "Which file descriptor number is associated with `stderr`?",
        options: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        correct: "c",
        explanation: "`stderr` uses file descriptor 2."
      },
      {
        id: 3014,
        source: "organized-prep",
        topic: "User identity",
        question: "Which command displays the username of the logged-in user?",
        options: {
          a: "whoami",
          b: "hostname",
          c: "uname",
          d: "tty"
        },
        correct: "a",
        explanation: "`whoami` displays the current username."
      },
      {
        id: 3015,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Which utility reports total used and available space on mounted filesystems in human-readable form?",
        options: {
          a: "du -sh",
          b: "fdisk -l",
          c: "lsblk",
          d: "df -h"
        },
        correct: "d",
        explanation: "`df -h` reports mounted filesystem usage in human-readable units."
      }
    ]
  },
  {
    unitName: "ST-2 MCQs",
    examGroup: "st2",
    questions: [
      {
        id: 3101,
        source: "organized-prep",
        topic: "Piping",
        question: "What does the pipe operator `|` do?",
        options: {
          a: "Sends output of one command as input to another",
          b: "Redirects output to a file",
          c: "Appends output to an existing file",
          d: "Reads input from a file"
        },
        correct: "a",
        explanation: "The pipe connects one command's standard output to another command's standard input."
      },
      {
        id: 3102,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which redirection operator appends output to an existing file?",
        options: {
          a: ">",
          b: "<",
          c: ">>",
          d: "|"
        },
        correct: "c",
        explanation: "`>>` appends output; `>` overwrites."
      },
      {
        id: 3103,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which symbol redirects both standard output and standard error to the same file?",
        options: {
          a: "2>",
          b: "&>",
          c: ">>",
          d: "<"
        },
        correct: "b",
        explanation: "`&>` redirects both stdout and stderr in Bash."
      },
      {
        id: 3104,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command is used to combine lines from multiple files side-by-side?",
        options: {
          a: "cut",
          b: "sort",
          c: "grep",
          d: "paste"
        },
        correct: "d",
        explanation: "`paste` merges corresponding lines side-by-side."
      },
      {
        id: 3105,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command sequence extracts the second column of a CSV and sorts it numerically?",
        options: {
          a: "paste -d',' -f2 | sort",
          b: "cut -d',' -f2 | sort -n",
          c: "cut -f2 | sort -r",
          d: "sort -n | cut -d',' -f2"
        },
        correct: "b",
        explanation: "`cut -d',' -f2` selects column 2 and `sort -n` sorts numerically."
      },
      {
        id: 3106,
        source: "organized-prep",
        topic: "Loops",
        question: "What is the primary difference between a `while` loop and an `until` loop?",
        options: {
          a: "`until` runs if true; `while` runs if false",
          b: "There is no difference",
          c: "`while` cannot handle numbers",
          d: "`while` runs if the condition is true; `until` runs if it is false"
        },
        correct: "d",
        explanation: "`while` repeats while a condition is true; `until` repeats until the condition becomes true."
      },
      {
        id: 3107,
        source: "organized-prep",
        topic: "Case statements",
        question: "In a `case` statement, which character sequence ends a pattern block?",
        options: {
          a: ";;",
          b: "fi",
          c: "done",
          d: "caseend"
        },
        correct: "a",
        explanation: "`;;` terminates a pattern block in a shell `case` statement."
      },
      {
        id: 3108,
        source: "organized-prep",
        topic: "Arithmetic",
        question: "Which syntax is the modern standard for performing integer arithmetic in Bash?",
        options: {
          a: "expr 1 + 1",
          b: "[1 + 1]",
          c: "$((1 + 1))",
          d: "{1 + 1}"
        },
        correct: "c",
        explanation: "Arithmetic expansion uses `$((...))`."
      },
      {
        id: 3109,
        source: "organized-prep",
        topic: "Exit status",
        question: "Which special variable holds the exit status of the last executed command?",
        options: {
          a: "$0",
          b: "$?",
          c: "$#",
          d: "$$"
        },
        correct: "b",
        explanation: "`$?` stores the exit status of the last command."
      },
      {
        id: 3110,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "In a shell script, which parameter represents the total number of arguments passed?",
        options: {
          a: "$@",
          b: "$*",
          c: "$?",
          d: "$#"
        },
        correct: "d",
        explanation: "`$#` stores the argument count."
      },
      {
        id: 3111,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Which special parameter contains all arguments as a single word?",
        options: {
          a: "$*",
          b: "$@",
          c: "$#",
          d: "$?"
        },
        correct: "a",
        explanation: "`$*` expands all positional parameters as one word when quoted."
      },
      {
        id: 3112,
        source: "organized-prep",
        topic: "LVM",
        question: "In LVM, which component acts as the physical layer directly mapped to disk partitions?",
        options: {
          a: "Logical Volume",
          b: "Volume Group",
          c: "Physical Volume",
          d: "Extent"
        },
        correct: "c",
        explanation: "A Physical Volume is the LVM layer mapped to a disk or partition."
      },
      {
        id: 3113,
        source: "organized-prep",
        topic: "LVM",
        question: "Which LVM command is used to initialize a physical partition for LVM use?",
        options: {
          a: "vgcreate",
          b: "pvcreate",
          c: "lvcreate",
          d: "lvextend"
        },
        correct: "b",
        explanation: "`pvcreate` initializes a disk or partition as an LVM physical volume."
      },
      {
        id: 3114,
        source: "organized-prep",
        topic: "LVM",
        question: "What is the correct order to expand a Volume Group with a new disk?",
        options: {
          a: "vgcreate followed by lvextend",
          b: "lvcreate followed by vgextend",
          c: "pvcreate followed by vgextend",
          d: "pvcreate followed by lvresize"
        },
        correct: "c",
        explanation: "Prepare the disk with `pvcreate`, then add it to the VG using `vgextend`."
      },
      {
        id: 3115,
        source: "organized-prep",
        topic: "LVM",
        question: "Which command extends a logical volume named `data_lv` by 5GB?",
        options: {
          a: "lvresize -L +5G /dev/vg0/data_lv",
          b: "pvresize -L +5G /dev/vg0/data_lv",
          c: "vgextend -L +5G /dev/vg0/data_lv",
          d: "mount -L +5G /dev/vg0/data_lv"
        },
        correct: "a",
        explanation: "`lvresize -L +5G /dev/vg0/data_lv` grows that logical volume by 5GB."
      }
    ]
  },
  {
    unitName: "End Term MCQs",
    examGroup: "endTerm",
    questions: [
      {
        id: 3201,
        source: "organized-prep",
        topic: "Netplan",
        question: "Which directory contains the YAML configuration files for Netplan?",
        options: {
          a: "/etc/network/",
          b: "/var/lib/netplan/",
          c: "/etc/netplan/",
          d: "/etc/sysconfig/"
        },
        correct: "c",
        explanation: "Netplan YAML files are stored under `/etc/netplan/`."
      },
      {
        id: 3202,
        source: "organized-prep",
        topic: "Netplan",
        question: "Which Netplan command applies changes with rollback safety?",
        options: {
          a: "sudo netplan apply",
          b: "sudo netplan try",
          c: "sudo netplan generate",
          d: "sudo nmcli con up"
        },
        correct: "b",
        explanation: "`netplan try` allows confirmation and rollback if connectivity fails."
      },
      {
        id: 3203,
        source: "organized-prep",
        topic: "Firewall",
        question: "What is the default command-line tool to manage the firewall on Ubuntu?",
        options: {
          a: "iptables",
          b: "firewalld",
          c: "nftables",
          d: "ufw"
        },
        correct: "d",
        explanation: "Ubuntu commonly uses UFW, the Uncomplicated Firewall."
      },
      {
        id: 3204,
        source: "organized-prep",
        topic: "Firewall",
        question: "Which `ufw` command correctly allows incoming traffic on port 80/TCP?",
        options: {
          a: "ufw allow 80/tcp",
          b: "ufw open 80",
          c: "ufw enable 80",
          d: "ufw permit 80/tcp"
        },
        correct: "a",
        explanation: "`ufw allow 80/tcp` allows TCP traffic on port 80."
      },
      {
        id: 3205,
        source: "organized-prep",
        topic: "SSH",
        question: "Which command allows incoming SSH connections on Ubuntu?",
        options: {
          a: "iptables --allow ssh",
          b: "netstat allow 22",
          c: "ufw allow ssh",
          d: "nmcli con allow ssh"
        },
        correct: "c",
        explanation: "`ufw allow ssh` opens the SSH service profile."
      },
      {
        id: 3206,
        source: "organized-prep",
        topic: "SSH security",
        question: "Which service protects SSH from brute-force attacks by banning IPs?",
        options: {
          a: "ufw",
          b: "ssh-agent",
          c: "openssl",
          d: "fail2ban"
        },
        correct: "d",
        explanation: "`fail2ban` bans repeated failed login sources."
      },
      {
        id: 3207,
        source: "organized-prep",
        topic: "SSH daemon",
        question: "Which configuration file manages the behavior of the SSH daemon?",
        options: {
          a: "/etc/ssh/sshd_config",
          b: "/etc/ssh/ssh_config",
          c: "/etc/ssh_host_key",
          d: "~/.ssh/config"
        },
        correct: "a",
        explanation: "`sshd_config` configures the SSH daemon."
      },
      {
        id: 3208,
        source: "organized-prep",
        topic: "tcpdump",
        question: "When using `tcpdump`, which flag disables name resolution and shows raw IPs?",
        options: {
          a: "-r",
          b: "-i",
          c: "-n",
          d: "-v"
        },
        correct: "c",
        explanation: "`-n` prevents name resolution."
      },
      {
        id: 3209,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Which `tcpdump` flag saves raw packets to a `.pcap` file?",
        options: {
          a: "-w",
          b: "-n",
          c: "-i",
          d: "-v"
        },
        correct: "a",
        explanation: "`tcpdump -w file.pcap` writes captured packets to a file."
      },
      {
        id: 3210,
        source: "organized-prep",
        topic: "NetworkManager",
        question: "Which `nmcli` command provides a summary of all network interfaces?",
        options: {
          a: "nmcli connection show",
          b: "nmcli device status",
          c: "nmcli general status",
          d: "nmcli network on"
        },
        correct: "b",
        explanation: "`nmcli device status` summarizes interface states."
      },
      {
        id: 3211,
        source: "organized-prep",
        topic: "Kernel logs",
        question: "Which command provides a real-time view of kernel ring buffer messages?",
        options: {
          a: "lsblk",
          b: "fdisk -l",
          c: "dmesg",
          d: "cat /etc/fstab"
        },
        correct: "c",
        explanation: "`dmesg` displays kernel ring buffer messages."
      },
      {
        id: 3212,
        source: "organized-prep",
        topic: "System logs",
        question: "Which `journalctl` option filters log entries from the current boot only?",
        options: {
          a: "journalctl -u",
          b: "journalctl -f",
          c: "journalctl -k",
          d: "journalctl -b"
        },
        correct: "d",
        explanation: "`journalctl -b` filters the current boot."
      },
      {
        id: 3213,
        source: "organized-prep",
        topic: "Backup",
        question: "Which tool is best for synchronizing files while minimizing data transfer?",
        options: {
          a: "rsync",
          b: "tar",
          c: "cp -r",
          d: "scp"
        },
        correct: "a",
        explanation: "`rsync` transfers only the differences where possible."
      },
      {
        id: 3214,
        source: "organized-prep",
        topic: "Virtualization",
        question: "Which technology is listed for virtualization on Ubuntu in the syllabus?",
        options: {
          a: "Netplan",
          b: "KVM",
          c: "UFW",
          d: "rsync"
        },
        correct: "b",
        explanation: "`linux.jpeg` lists virtualization with KVM on Ubuntu."
      },
      {
        id: 3215,
        source: "organized-prep",
        topic: "Containers",
        question: "Which container platform is explicitly included in the Linux syllabus?",
        options: {
          a: "AppArmor",
          b: "NetBIOS",
          c: "Docker",
          d: "Syslog"
        },
        correct: "c",
        explanation: "`linux.jpeg` lists Docker, LXC/LXD, and container orchestration basics."
      }
    ]
  }
];

const EMPTY_BASH_STARTER = "#!/usr/bin/env bash\n\n";

const LINUX_BASH_PROBLEMS = [
  {
    id: "bash-001",
    title: "Check Number Sign",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read one integer and print whether it is Positive, Negative, or Zero.",
    constraints: ["Input contains one integer.", "Output must match exactly: `Positive`, `Negative`, or `Zero`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -gt 0 ]; then\n  echo \"Positive\"\nelif [ \"$n\" -lt 0 ]; then\n  echo \"Negative\"\nelse\n  echo \"Zero\"\nfi\n",
    examples: [{ input: "-5\n", expectedOutput: "Negative\n" }],
    tests: [
      { name: "sample negative", input: "-5\n", expectedOutput: "Negative\n", visible: true },
      { name: "positive", input: "7\n", expectedOutput: "Positive\n", visible: true },
      { name: "zero", input: "0\n", expectedOutput: "Zero\n", visible: false }
    ]
  },
  {
    id: "bash-002",
    title: "Greater Of Two",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read two integers and print the greater one.",
    constraints: ["Input contains two integers on one line.", "Output only the larger integer."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread a b\nif [ \"$a\" -gt \"$b\" ]; then\n  echo \"$a\"\nelse\n  echo \"$b\"\nfi\n",
    examples: [{ input: "10 25\n", expectedOutput: "25\n" }],
    tests: [
      { name: "sample second greater", input: "10 25\n", expectedOutput: "25\n", visible: true },
      { name: "first greater", input: "30 12\n", expectedOutput: "30\n", visible: true },
      { name: "negative values", input: "-3 -8\n", expectedOutput: "-3\n", visible: false }
    ]
  },
  {
    id: "bash-003",
    title: "Basic Attributes",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read UID, GID, kernel name, and current year. Print them as labeled lines.",
    constraints: ["Input has four values: UID GID KERNEL YEAR.", "Print one labeled value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread uid gid kernel year\necho \"UID: $uid\"\necho \"GID: $gid\"\necho \"Kernel: $kernel\"\necho \"Year: $year\"\n",
    examples: [{ input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n" }],
    tests: [
      { name: "student account", input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n", visible: true },
      { name: "service account", input: "120 130 Linux 2025\n", expectedOutput: "UID: 120\nGID: 130\nKernel: Linux\nYear: 2025\n", visible: true },
      { name: "admin account", input: "0 0 GNU/Linux 2024\n", expectedOutput: "UID: 0\nGID: 0\nKernel: GNU/Linux\nYear: 2024\n", visible: false }
    ]
  },
  {
    id: "bash-004",
    title: "Leap Year Checker",
    difficulty: "Medium",
    tags: ["ST-2", "if-else", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a year and print whether it is a leap year.",
    constraints: ["Use the standard leap-year rule.", "Output exactly `Leap year` or `Not a leap year`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread year\nif [ $((year % 400)) -eq 0 ] || { [ $((year % 4)) -eq 0 ] && [ $((year % 100)) -ne 0 ]; }; then\n  echo \"Leap year\"\nelse\n  echo \"Not a leap year\"\nfi\n",
    examples: [{ input: "2024\n", expectedOutput: "Leap year\n" }],
    tests: [
      { name: "sample leap", input: "2024\n", expectedOutput: "Leap year\n", visible: true },
      { name: "century not leap", input: "1900\n", expectedOutput: "Not a leap year\n", visible: true },
      { name: "century leap", input: "2000\n", expectedOutput: "Leap year\n", visible: false }
    ]
  },
  {
    id: "bash-005",
    title: "Divisibility Test",
    difficulty: "Easy",
    tags: ["ST-2", "if-else", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read one number and check whether it is divisible by both 3 and 5.",
    constraints: ["Input contains one integer.", "Output exactly `Divisible by both 3 and 5` or `Not divisible by both`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ $((n % 3)) -eq 0 ] && [ $((n % 5)) -eq 0 ]; then\n  echo \"Divisible by both 3 and 5\"\nelse\n  echo \"Not divisible by both\"\nfi\n",
    examples: [{ input: "15\n", expectedOutput: "Divisible by both 3 and 5\n" }],
    tests: [
      { name: "sample divisible", input: "15\n", expectedOutput: "Divisible by both 3 and 5\n", visible: true },
      { name: "only divisible by 3", input: "9\n", expectedOutput: "Not divisible by both\n", visible: true },
      { name: "only divisible by 5", input: "20\n", expectedOutput: "Not divisible by both\n", visible: false }
    ]
  },
  {
    id: "bash-006",
    title: "Menu Calculator",
    difficulty: "Medium",
    tags: ["ST-2", "case", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a menu choice and two numbers. Use 1=Add, 2=Subtract, 3=Multiply, 4=Divide.",
    constraints: ["Input line 1 is the choice.", "Input line 2 contains two integers.", "Use the exact output labels."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread choice\nread a b\ncase \"$choice\" in\n  1) echo \"Sum = $((a + b))\" ;;\n  2) echo \"Difference = $((a - b))\" ;;\n  3) echo \"Product = $((a * b))\" ;;\n  4) echo \"Division = $((a / b))\" ;;\n  *) echo \"Invalid choice\" ;;\nesac\n",
    examples: [{ input: "3\n10 2\n", expectedOutput: "Product = 20\n" }],
    tests: [
      { name: "sample multiply", input: "3\n10 2\n", expectedOutput: "Product = 20\n", visible: true },
      { name: "addition", input: "1\n8 7\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "subtract", input: "2\n12 5\n", expectedOutput: "Difference = 7\n", visible: false },
      { name: "divide", input: "4\n20 4\n", expectedOutput: "Division = 5\n", visible: false }
    ]
  },
  {
    id: "bash-007",
    title: "Day Name",
    difficulty: "Easy",
    tags: ["ST-2", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a day number from 1 to 7 and print the corresponding day name.",
    constraints: ["For values outside 1-7, print `Invalid day`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\ncase \"$n\" in\n  1) echo \"Monday\" ;;\n  2) echo \"Tuesday\" ;;\n  3) echo \"Wednesday\" ;;\n  4) echo \"Thursday\" ;;\n  5) echo \"Friday\" ;;\n  6) echo \"Saturday\" ;;\n  7) echo \"Sunday\" ;;\n  *) echo \"Invalid day\" ;;\nesac\n",
    examples: [{ input: "3\n", expectedOutput: "Wednesday\n" }],
    tests: [
      { name: "sample", input: "3\n", expectedOutput: "Wednesday\n", visible: true },
      { name: "first day", input: "1\n", expectedOutput: "Monday\n", visible: true },
      { name: "invalid day", input: "9\n", expectedOutput: "Invalid day\n", visible: false }
    ]
  },
  {
    id: "bash-008",
    title: "Grade Result",
    difficulty: "Easy",
    tags: ["ST-2", "case", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a grade letter and print the matching result.",
    constraints: ["A=Excellent, B=Good, C=Average, D=Below Average.", "Any other grade prints `Invalid`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread grade\ncase \"$grade\" in\n  A) echo \"Excellent\" ;;\n  B) echo \"Good\" ;;\n  C) echo \"Average\" ;;\n  D) echo \"Below Average\" ;;\n  *) echo \"Invalid\" ;;\nesac\n",
    examples: [{ input: "B\n", expectedOutput: "Good\n" }],
    tests: [
      { name: "sample", input: "B\n", expectedOutput: "Good\n", visible: true },
      { name: "below average", input: "D\n", expectedOutput: "Below Average\n", visible: true },
      { name: "invalid", input: "F\n", expectedOutput: "Invalid\n", visible: false }
    ]
  },
  {
    id: "bash-009",
    title: "Network Monitor Command",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read an interface, source IP, and destination port. Print the tcpdump command that captures matching traffic.",
    constraints: ["Input format: INTERFACE SOURCE_IP PORT.", "Output one command only."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread iface src port\necho \"tcpdump -i $iface src $src and dst port $port\"\n",
    examples: [{ input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n" }],
    tests: [
      { name: "sample web traffic", input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n", visible: true },
      { name: "ssh traffic", input: "ens33 10.0.0.5 22\n", expectedOutput: "tcpdump -i ens33 src 10.0.0.5 and dst port 22\n", visible: true },
      { name: "api traffic", input: "wlan0 172.16.2.10 443\n", expectedOutput: "tcpdump -i wlan0 src 172.16.2.10 and dst port 443\n", visible: false }
    ]
  },
  {
    id: "bash-010",
    title: "Backup Script Command",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a source directory and backup filename. Print the command to create a compressed tar.gz backup.",
    constraints: ["Input format: SOURCE_DIR BACKUP_FILE.", "Output one `tar` command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread source backup\necho \"tar -czf $backup $source\"\n",
    examples: [{ input: "/etc/configs configs.tar.gz\n", expectedOutput: "tar -czf configs.tar.gz /etc/configs\n" }],
    tests: [
      { name: "sample configs", input: "/etc/configs configs.tar.gz\n", expectedOutput: "tar -czf configs.tar.gz /etc/configs\n", visible: true },
      { name: "home backup", input: "/home/student home.tar.gz\n", expectedOutput: "tar -czf home.tar.gz /home/student\n", visible: true },
      { name: "logs backup", input: "/var/log logs.tar.gz\n", expectedOutput: "tar -czf logs.tar.gz /var/log\n", visible: false }
    ]
  },
  {
    id: "bash-011",
    title: "Log Filtering Command",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a search word, input log file, and output file. Print the command that extracts matching lines into the output file.",
    constraints: ["Input format: WORD INPUT_FILE OUTPUT_FILE.", "Output one command only."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread word input output\necho \"grep $word $input > $output\"\n",
    examples: [{ input: "error app.log errors.txt\n", expectedOutput: "grep error app.log > errors.txt\n" }],
    tests: [
      { name: "sample errors", input: "error app.log errors.txt\n", expectedOutput: "grep error app.log > errors.txt\n", visible: true },
      { name: "warnings", input: "warn system.log warnings.txt\n", expectedOutput: "grep warn system.log > warnings.txt\n", visible: true },
      { name: "failed auth", input: "Failed auth.log failed.txt\n", expectedOutput: "grep Failed auth.log > failed.txt\n", visible: false }
    ]
  },
  {
    id: "bash-012",
    title: "Enable Service At Boot",
    difficulty: "Easy",
    tags: ["End Term", "systemctl", "services"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a service name and print the command that enables it to start at boot.",
    constraints: ["Input contains one service name.", "Output one `systemctl` command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread service\necho \"systemctl enable $service\"\n",
    examples: [{ input: "nginx\n", expectedOutput: "systemctl enable nginx\n" }],
    tests: [
      { name: "sample nginx", input: "nginx\n", expectedOutput: "systemctl enable nginx\n", visible: true },
      { name: "ssh", input: "ssh\n", expectedOutput: "systemctl enable ssh\n", visible: true },
      { name: "docker", input: "docker\n", expectedOutput: "systemctl enable docker\n", visible: false }
    ]
  }
];
