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
      },
      {
        id: 3016,
        source: "organized-prep",
        topic: "Mounting",
        question: "Which command mounts a file system at a specified mount point?",
        options: {
          a: "fsck",
          b: "mount",
          c: "umount",
          d: "parted"
        },
        correct: "b",
        explanation: "`mount` attaches a filesystem to a directory mount point."
      },
      {
        id: 3017,
        source: "organized-prep",
        topic: "Filesystem repair",
        question: "Which command should you run on an unmounted device to check and repair its consistency?",
        options: {
          a: "df -h",
          b: "du -h",
          c: "fsck",
          d: "free"
        },
        correct: "c",
        explanation: "`fsck` checks and repairs filesystem consistency on an unmounted device."
      },
      {
        id: 3018,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Which command displays disk usage of files and directories in human-readable form?",
        options: {
          a: "du -h",
          b: "df -i",
          c: "lsblk",
          d: "free -h"
        },
        correct: "a",
        explanation: "`du -h` reports file and directory disk usage in human-readable units."
      },
      {
        id: 3019,
        source: "organized-prep",
        topic: "Partitioning",
        question: "Which tool is most appropriate for creating a new partition on a large disk using GPT?",
        options: {
          a: "fdformat",
          b: "mkfs",
          c: "mount",
          d: "parted"
        },
        correct: "d",
        explanation: "`parted` supports GPT partition tables and large disks."
      },
      {
        id: 3020,
        source: "organized-prep",
        topic: "Processes",
        question: "Which command can be used to terminate a process by its PID such as PID 1234?",
        options: {
          a: "ps -9 1234",
          b: "kill -9 1234",
          c: "stop 1234",
          d: "end 1234"
        },
        correct: "b",
        explanation: "`kill -9 1234` sends SIGKILL to process 1234."
      },
      {
        id: 3021,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command extracts only the third column from a colon-delimited `/etc/passwd` file?",
        options: {
          a: "cut -d: -f3 /etc/passwd",
          b: "awk -d: 3 /etc/passwd",
          c: "sort -d: -f3 /etc/passwd",
          d: "paste -d: -f3 /etc/passwd"
        },
        correct: "a",
        explanation: "`cut -d: -f3 /etc/passwd` selects field 3 using colon as the delimiter."
      },
      {
        id: 3022,
        source: "organized-prep",
        topic: "Unmounting",
        question: "Which command is used to safely detach a mounted file system?",
        options: {
          a: "mount",
          b: "detachfs",
          c: "umount",
          d: "ejectfs"
        },
        correct: "c",
        explanation: "`umount` detaches a mounted filesystem."
      },
      {
        id: 3023,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command in Linux sorts lines of a text file in alphabetical order?",
        options: {
          a: "uniq",
          b: "sort",
          c: "cut",
          d: "paste"
        },
        correct: "b",
        explanation: "`sort` orders lines alphabetically by default."
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
      },
      {
        id: 3116,
        source: "organized-prep",
        topic: "Kernel tuning",
        question: "Which sysctl parameter controls the maximum number of open file descriptors system-wide?",
        options: {
          a: "net.ipv4.ip_forward",
          b: "vm.swappiness",
          c: "kernel.pid_max",
          d: "fs.file-max"
        },
        correct: "d",
        explanation: "`fs.file-max` controls the system-wide maximum number of open file descriptors."
      },
      {
        id: 3117,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which symbol is used to redirect the contents of a file into a command's input?",
        options: {
          a: "<",
          b: ">",
          c: ">>",
          d: "|"
        },
        correct: "a",
        explanation: "`<` redirects a file into standard input."
      },
      {
        id: 3118,
        source: "organized-prep",
        topic: "Conditionals",
        question: "Which construct correctly checks if a variable NUM is between 10 and 20?",
        options: {
          a: "if [ $NUM > 10 && $NUM < 20 ]",
          b: "if [[ $NUM -gt 10 && $NUM -lt 20 ]]",
          c: "if (( NUM > 10 || NUM < 20 ))",
          d: "if test $NUM between 10 20"
        },
        correct: "b",
        explanation: "`[[ $NUM -gt 10 && $NUM -lt 20 ]]` combines two numeric comparisons."
      },
      {
        id: 3119,
        source: "organized-prep",
        topic: "Strings",
        question: "How do you count the number of characters in a variable `VAR=hello`?",
        options: {
          a: "echo $#VAR",
          b: "echo ${VAR#}",
          c: "echo ${#VAR}",
          d: "echo length(VAR)"
        },
        correct: "c",
        explanation: "`${#VAR}` expands to the length of the variable value."
      },
      {
        id: 3120,
        source: "organized-prep",
        topic: "File tests",
        question: "Which test command syntax checks if a variable points to an existing directory?",
        options: {
          a: "[ -f $var ]",
          b: "[ -d $var ]",
          c: "[ -x $var ]",
          d: "[ -e dir $var ]"
        },
        correct: "b",
        explanation: "`-d` tests whether the path is an existing directory."
      },
      {
        id: 3121,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Which special variable stores the process ID of the current shell?",
        options: {
          a: "$$",
          b: "$!",
          c: "$?",
          d: "$#"
        },
        correct: "a",
        explanation: "`$$` expands to the PID of the current shell."
      },
      {
        id: 3122,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which redirection operator is used to send standard error to a file?",
        options: {
          a: ">",
          b: "2>",
          c: "<",
          d: "1>"
        },
        correct: "b",
        explanation: "`2>` redirects file descriptor 2, standard error."
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
      },
      {
        id: 3216,
        source: "organized-prep",
        topic: "Services",
        question: "Which command enables a service to start automatically at boot time?",
        options: {
          a: "systemctl start <service>",
          b: "service <service> boot",
          c: "systemctl enable <service>",
          d: "chkboot <service>"
        },
        correct: "c",
        explanation: "`systemctl enable <service>` enables a unit at boot."
      },
      {
        id: 3217,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Which `tcpdump` flag captures traffic on a specific interface `eth0`?",
        options: {
          a: "-n eth0",
          b: "-w eth0",
          c: "-r eth0",
          d: "-i eth0"
        },
        correct: "d",
        explanation: "`tcpdump -i eth0` captures on interface `eth0`."
      },
      {
        id: 3218,
        source: "organized-prep",
        topic: "Network monitoring",
        question: "Which command is used to monitor real-time network traffic at the packet level?",
        options: {
          a: "tcpdump",
          b: "rsync",
          c: "journalctl",
          d: "netplan"
        },
        correct: "a",
        explanation: "`tcpdump` captures packet-level network traffic."
      },
      {
        id: 3219,
        source: "organized-prep",
        topic: "Firewall",
        question: "How do you allow traffic on port 8080 permanently using `ufw`?",
        options: {
          a: "sudo ufw enable 8080",
          b: "sudo ufw allow 8080/tcp",
          c: "sudo ufw port 8080/tcp",
          d: "sudo ufw open permanent 8080"
        },
        correct: "b",
        explanation: "`sudo ufw allow 8080/tcp` adds a persistent UFW rule for TCP port 8080."
      },
      {
        id: 3220,
        source: "organized-prep",
        topic: "I/O monitoring",
        question: "Which command shows detailed I/O statistics updated every 2 seconds?",
        options: {
          a: "free 2",
          b: "vmstat -d",
          c: "iostat 2",
          d: "dmesg -w"
        },
        correct: "c",
        explanation: "`iostat 2` refreshes I/O statistics every 2 seconds."
      }
    ]
  },
  {
    unitName: "PT1 MCQs",
    examGroup: "practiceTest1",
    questions: [
      {
        id: 3301,
        source: "practice-test-1",
        topic: "Strings",
        question: "Which command is used to display the length of a string variable 'str' in Bash?",
        options: {
          a: "echo $str.length",
          b: "echo ${str#}",
          c: "echo ${#str}",
          d: "echo len(str)"
        },
        correct: "c",
        explanation: "`${#str}` displays the length of a string variable in Bash."
      },
      {
        id: 3302,
        source: "practice-test-1",
        topic: "SSH",
        question: "What is the default port for SSH?",
        options: {
          a: "21",
          b: "22",
          c: "23",
          d: "80"
        },
        correct: "b",
        explanation: "Port 22 is the standard port reserved for SSH."
      },
      {
        id: 3303,
        source: "practice-test-1",
        topic: "Functions",
        question: "How do you define a function in a shell script?",
        options: {
          a: "def func_name() {}",
          b: "function = func_name {}",
          c: "func_name() {}",
          d: "func func_name {}"
        },
        correct: "c",
        explanation: "A function is defined using the syntax func_name() {} or the function keyword."
      },
      {
        id: 3304,
        source: "practice-test-1",
        topic: "Crontab",
        question: "In a crontab file, what does the first field represent?",
        options: {
          a: "Hour",
          b: "Day of month",
          c: "Month",
          d: "Minute"
        },
        correct: "d",
        explanation: "The fields in a crontab represent Minute, Hour, Day of month, Month, Day of week."
      },
      {
        id: 3305,
        source: "practice-test-1",
        topic: "Network Analysis",
        question: "Which tool is primarily used for capturing and analyzing network packets?",
        options: {
          a: "nmap",
          b: "wireshark",
          c: "netstat",
          d: "traceroute"
        },
        correct: "b",
        explanation: "Wireshark is a popular network packet analyzer."
      },
      {
        id: 3306,
        source: "practice-test-1",
        topic: "Services",
        question: "Which systemctl command is used to prevent a service from starting automatically at boot?",
        options: {
          a: "systemctl stop",
          b: "systemctl disable",
          c: "systemctl mask",
          d: "systemctl unenable"
        },
        correct: "b",
        explanation: "systemctl disable stops the service from starting automatically at boot."
      },
      {
        id: 3307,
        source: "practice-test-1",
        topic: "Processes",
        question: "Which command is used to list currently running processes in real-time?",
        options: {
          a: "ps -ef",
          b: "kill",
          c: "top",
          d: "df"
        },
        correct: "c",
        explanation: "top provides a dynamic real-time view of running processes."
      },
      {
        id: 3308,
        source: "practice-test-1",
        topic: "Archiving",
        question: "Which command creates a compressed archive 'backup.tar.gz' of a directory?",
        options: {
          a: "tar -xzvf backup.tar.gz dir",
          b: "tar -czvf backup.tar.gz dir",
          c: "zip backup.tar.gz dir",
          d: "tar -cjvf backup.tar.gz dir"
        },
        correct: "b",
        explanation: "tar -czvf creates a gzipped tar archive."
      },
      {
        id: 3309,
        source: "practice-test-1",
        topic: "Arrays",
        question: "How do you declare an indexed array named 'my_array' in Bash?",
        options: {
          a: "array my_array",
          b: "declare -A my_array",
          c: "declare -a my_array",
          d: "my_array = []"
        },
        correct: "c",
        explanation: "declare -a declares an indexed array, while -A declares an associative array."
      },
      {
        id: 3310,
        source: "practice-test-1",
        topic: "Netplan",
        question: "In Netplan, which file format is used for configuration?",
        options: {
          a: "JSON",
          b: "XML",
          c: "YAML",
          d: "INI"
        },
        correct: "c",
        explanation: "Netplan uses YAML (YAML Ain't Markup Language) for network configurations."
      },
      {
        id: 3311,
        source: "practice-test-1",
        topic: "LVM",
        question: "What does LVM stand for?",
        options: {
          a: "Linux Volume Manager",
          b: "Logical Volume Management",
          c: "Linux Virtual Machine",
          d: "Logical Virtual Mode"
        },
        correct: "b",
        explanation: "LVM stands for Logical Volume Management, a system of managing hard drives."
      },
      {
        id: 3312,
        source: "practice-test-1",
        topic: "Docker",
        question: "Which Docker command is used to build an image from a Dockerfile in the current directory?",
        options: {
          a: "docker build -t my-image .",
          b: "docker create -t my-image .",
          c: "docker run -t my-image .",
          d: "docker compile my-image ."
        },
        correct: "a",
        explanation: "docker build -t my-image . builds an image using the Dockerfile in the current directory."
      },
      {
        id: 3313,
        source: "practice-test-1",
        topic: "Security",
        question: "What is the role of AppArmor in a Linux system?",
        options: {
          a: "To scan files for malware",
          b: "To provide Mandatory Access Control (MAC)",
          c: "To restrict incoming port access",
          d: "To manage disk encryption keys"
        },
        correct: "b",
        explanation: "AppArmor is a Linux kernel security module that implements Mandatory Access Control."
      },
      {
        id: 3314,
        source: "practice-test-1",
        topic: "Shell Scripting",
        question: "In a shell script, what does the 'set -e' command do?",
        options: {
          a: "Enables debugging mode",
          b: "Ignores all errors and continues",
          c: "Exits the script if any command fails",
          d: "Exports all variables automatically"
        },
        correct: "c",
        explanation: "set -e causes the shell to exit immediately if any command exits with a non-zero status."
      },
      {
        id: 3315,
        source: "practice-test-1",
        topic: "Arrays",
        question: "How do you append an element 'item' to an existing array 'arr' in Bash?",
        options: {
          a: "arr.append('item')",
          b: "arr+=('item')",
          c: "arr = arr + 'item'",
          d: "push arr 'item'"
        },
        correct: "b",
        explanation: "arr+=('item') appends the element to the array."
      },
      {
        id: 3316,
        source: "practice-test-1",
        topic: "Strings",
        question: "How do you convert a string variable 'STR' to all uppercase in Bash?",
        options: {
          a: "${STR^^}",
          b: "${STR,,}",
          c: "upper($STR)",
          d: "${STR.upper}"
        },
        correct: "a",
        explanation: "${STR^^} converts the string value to uppercase in Bash."
      },
      {
        id: 3317,
        source: "practice-test-1",
        topic: "Arrays",
        question: "In Bash, which syntax correctly retrieves all elements of an array named 'ARR'?",
        options: {
          a: "${ARR[*]}",
          b: "${ARR[@]}",
          c: "${ARR}",
          d: "Both ${ARR[*]} and ${ARR[@]}"
        },
        correct: "d",
        explanation: "Both ${ARR[*]} and ${ARR[@]} expand to all elements of the array."
      },
      {
        id: 3318,
        source: "practice-test-1",
        topic: "Functions",
        question: "Which keyword is commonly used to define a function in a Bash script?",
        options: {
          a: "def",
          b: "func",
          c: "function",
          d: "define"
        },
        correct: "c",
        explanation: "The function keyword can be used to declare functions in Bash."
      },
      {
        id: 3319,
        source: "practice-test-1",
        topic: "Services",
        question: "Which systemctl command is used to see the low-level properties of a unit file?",
        options: {
          a: "systemctl status",
          b: "systemctl cat",
          c: "systemctl show",
          d: "systemctl properties"
        },
        correct: "c",
        explanation: "systemctl show displays the detailed properties of a systemd unit."
      },
      {
        id: 3320,
        source: "practice-test-1",
        topic: "Virtualization",
        question: "Which technology provides a complete hardware emulation including a guest OS?",
        options: {
          a: "Containers (Docker)",
          b: "Virtual Machines (VMs)",
          c: "Chroot Jails",
          d: "Namespaces"
        },
        correct: "b",
        explanation: "Virtual Machines emulate hardware and run complete guest operating systems, unlike containers."
      },
      {
        id: 3321,
        source: "practice-test-1",
        topic: "Crontab",
        question: "Which crontab entry runs a script at 3:30 AM every day?",
        options: {
          a: "3 30 * * *",
          b: "30 3 * * *",
          c: "* 3 30 * *",
          d: "0 3 30 * *"
        },
        correct: "b",
        explanation: "30 3 * * * translates to Minute 30, Hour 3, and every day."
      },
      {
        id: 3322,
        source: "practice-test-1",
        topic: "Docker",
        question: "Which Docker command is used to remove all unused data including images and volumes?",
        options: {
          a: "docker rm all",
          b: "docker clean system",
          c: "docker system prune",
          d: "docker rmi -f"
        },
        correct: "c",
        explanation: "docker system prune cleans up unused Docker images, containers, networks, and volumes."
      },
      {
        id: 3323,
        source: "practice-test-1",
        topic: "Kubernetes",
        question: "What is the role of a Kubelet on a Kubernetes node?",
        options: {
          a: "To schedule pods to nodes",
          b: "To maintain networking rules",
          c: "To ensure containers are running in a pod",
          d: "To manage cluster storage"
        },
        correct: "c",
        explanation: "The Kubelet is the node agent that ensures container workloads are running as expected."
      },
      {
        id: 3324,
        source: "practice-test-1",
        topic: "Firewall",
        question: "How do you deny all incoming traffic by default using UFW?",
        options: {
          a: "ufw deny incoming",
          b: "ufw default deny incoming",
          c: "ufw block all",
          d: "ufw incoming disable"
        },
        correct: "b",
        explanation: "ufw default deny incoming sets the default incoming firewall policy to deny."
      },
      {
        id: 3325,
        source: "practice-test-1",
        topic: "Containers",
        question: "What is the main advantage of containers over Virtual Machines?",
        options: {
          a: "Better isolation security",
          b: "Ability to run different kernels",
          c: "Lower resource overhead",
          d: "Full BIOS-level control"
        },
        correct: "c",
        explanation: "Containers share the host OS kernel, resulting in significantly lower memory and CPU overhead."
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
      { name: "zero case", input: "0\n", expectedOutput: "Zero\n", visible: true },
      { name: "large positive", input: "1000000\n", expectedOutput: "Positive\n", visible: false },
      { name: "large negative", input: "-999999\n", expectedOutput: "Negative\n", visible: false }
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
      { name: "equal values", input: "15 15\n", expectedOutput: "15\n", visible: true },
      { name: "negative values", input: "-3 -8\n", expectedOutput: "-3\n", visible: false },
      { name: "large values", input: "9999 10000\n", expectedOutput: "10000\n", visible: false }
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
      { name: "admin account", input: "0 0 GNU/Linux 2024\n", expectedOutput: "UID: 0\nGID: 0\nKernel: GNU/Linux\nYear: 2024\n", visible: true },
      { name: "future year", input: "5000 5000 OS 3000\n", expectedOutput: "UID: 5000\nGID: 5000\nKernel: OS\nYear: 3000\n", visible: false },
      { name: "single digit IDs", input: "1 1 Unix 2000\n", expectedOutput: "UID: 1\nGID: 1\nKernel: Unix\nYear: 2000\n", visible: false }
    ]
  },
  {
    id: "bash-004",
    title: "Leap Year Checker",
    difficulty: "Medium",
    tags: ["ST-2", "if-else", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a year and print whether it is a leap year.",
    constraints: ["Use the standard leap-year rule (Divisible by 4, but not 100, unless divisible by 400).", "Output exactly `Leap year` or `Not a leap year`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread year\nif [ $((year % 400)) -eq 0 ] || { [ $((year % 4)) -eq 0 ] && [ $((year % 100)) -ne 0 ]; }; then\n  echo \"Leap year\"\nelse\n  echo \"Not a leap year\"\nfi\n",
    examples: [{ input: "2024\n", expectedOutput: "Leap year\n" }],
    tests: [
      { name: "sample leap", input: "2024\n", expectedOutput: "Leap year\n", visible: true },
      { name: "century not leap", input: "1900\n", expectedOutput: "Not a leap year\n", visible: true },
      { name: "century leap", input: "2000\n", expectedOutput: "Leap year\n", visible: true },
      { name: "non-leap normal", input: "2023\n", expectedOutput: "Not a leap year\n", visible: false },
      { name: "millennium leap", input: "3000\n", expectedOutput: "Not a leap year\n", visible: false },
      { name: "future leap", input: "2400\n", expectedOutput: "Leap year\n", visible: false }
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
      { name: "only divisible by 5", input: "20\n", expectedOutput: "Not divisible by both\n", visible: true },
      { name: "negative divisible", input: "-15\n", expectedOutput: "Divisible by both 3 and 5\n", visible: false },
      { name: "zero check", input: "0\n", expectedOutput: "Divisible by both 3 and 5\n", visible: false }
    ]
  },
  {
    id: "bash-006",
    title: "Menu Calculator",
    difficulty: "Medium",
    tags: ["ST-2", "case", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a menu choice and two numbers. Use 1=Add, 2=Subtract, 3=Multiply, 4=Divide.\nExample workflow: \nChoice: 1\nNumbers: 10 5\nOutput: Sum = 15",
    constraints: ["Input line 1 is the choice.", "Input line 2 contains two integers.", "Use the exact output labels.", "Handle choices 1, 2, 3, 4, and any invalid choice with 'Invalid choice'."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread choice\nread a b\ncase \"$choice\" in\n  1) echo \"Sum = $((a + b))\" ;;\n  2) echo \"Difference = $((a - b))\" ;;\n  3) echo \"Product = $((a * b))\" ;;\n  4) echo \"Division = $((a / b))\" ;;\n  *) echo \"Invalid choice\" ;;\nesac\n",
    examples: [{ input: "3\n10 2\n", expectedOutput: "Product = 20\n" }],
    tests: [
      { name: "sample multiply", input: "3\n10 2\n", expectedOutput: "Product = 20\n", visible: true },
      { name: "addition test", input: "1\n8 7\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "subtraction test", input: "2\n12 5\n", expectedOutput: "Difference = 7\n", visible: true },
      { name: "division test", input: "4\n20 4\n", expectedOutput: "Division = 5\n", visible: true },
      { name: "invalid choice test", input: "9\n10 10\n", expectedOutput: "Invalid choice\n", visible: false },
      { name: "large number addition", input: "1\n999 1\n", expectedOutput: "Sum = 1000\n", visible: false },
      { name: "division by zero (edge)", input: "4\n10 0\n", expectedOutput: "Division = 0\n", visible: false }
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
      { name: "last day", input: "7\n", expectedOutput: "Sunday\n", visible: true },
      { name: "invalid low", input: "0\n", expectedOutput: "Invalid day\n", visible: false },
      { name: "invalid high", input: "9\n", expectedOutput: "Invalid day\n", visible: false }
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
      { name: "grade A", input: "A\n", expectedOutput: "Excellent\n", visible: true },
      { name: "grade C", input: "C\n", expectedOutput: "Average\n", visible: true },
      { name: "below average", input: "D\n", expectedOutput: "Below Average\n", visible: false },
      { name: "invalid grade", input: "F\n", expectedOutput: "Invalid\n", visible: false }
    ]
  },
  {
    id: "bash-009",
    title: "Network Monitor Command",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Run a tcpdump capture on `eth0` for source `192.168.1.50` and destination port `80`.",
    constraints: ["Use the real `tcpdump` command in the virtual lab.", "Do not echo command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntcpdump -i eth0 src 192.168.1.50 and dst port 80\n",
    examples: [{ input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n" }],
    tests: [
      { name: "capture executed", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "packet visible", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "hidden packet check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: false }
    ]
  },
  {
    id: "bash-010",
    title: "Backup Script Command",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Create a compressed backup of `/etc/configs` named `configs.tar.gz`.",
    constraints: ["Use `tar -czf`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntar -czf configs.tar.gz /etc/configs\n",
    examples: [{ input: "", expectedOutput: "configs.tar.gz: /etc/configs\n" }],
    tests: [
      { name: "backup created", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: true },
      { name: "tar executed", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: true },
      { name: "hidden backup check", input: "", expectedOutput: "configs.tar.gz: /etc/configs\n", visible: false }
    ]
  },
  {
    id: "bash-011",
    title: "Log Filtering Command",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Extract `error` lines from `/var/log/app.log` into `errors.txt`, then show the saved file.",
    constraints: ["Use `grep` and `>` redirection.", "End with `cat errors.txt`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ngrep error /var/log/app.log > errors.txt\ncat errors.txt\n",
    examples: [{ input: "", expectedOutput: "error: api failed\n" }],
    tests: [
      { name: "saved app errors", input: "", expectedOutput: "error: api failed\n", visible: true },
      { name: "cat output file", input: "", expectedOutput: "error: api failed\n", visible: true },
      { name: "hidden grep check", input: "", expectedOutput: "error: api failed\n", visible: false }
    ]
  },
  {
    id: "bash-012",
    title: "Enable Service At Boot",
    difficulty: "Easy",
    tags: ["End Term", "systemctl", "services"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Enable the `nginx` service so it starts automatically at boot.",
    constraints: ["Use `systemctl enable nginx`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nsystemctl enable nginx\n",
    examples: [{ input: "", expectedOutput: "Created symlink for nginx.service.\n" }],
    tests: [
      { name: "nginx enabled", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: true },
      { name: "systemctl executed", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: true },
      { name: "hidden enable check", input: "", expectedOutput: "Created symlink for nginx.service.\n", visible: false }
    ]
  },
  {
    id: "bash-013",
    title: "Multiplication Table",
    difficulty: "Easy",
    tags: ["ST-1", "loops", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a number and print its multiplication table up to 10.",
    constraints: ["Input contains one integer.", "Print one result per line in `N x I = VALUE` format."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nfor i in {1..10}; do\n  echo \"$n x $i = $((n * i))\"\ndone\n",
    examples: [{ input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n" }],
    tests: [
      { name: "sample table", input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n", visible: true },
      { name: "two table", input: "2\n", expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n", visible: true },
      { name: "one table", input: "1\n", expectedOutput: "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10\n", visible: true },
      { name: "five table", input: "5\n", expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n", visible: false },
      { name: "ten table", input: "10\n", expectedOutput: "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100\n", visible: false }
    ]
  },
  {
    id: "bash-014",
    title: "Multi-User Setup",
    difficulty: "Medium",
    tags: ["ST-1", "users", "groups"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read group name, GID, and two users. Print the commands to create the group and users with that primary group.",
    constraints: ["Input format: GROUP GID USER1 USER2.", "Print one command per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread group gid user1 user2\necho \"groupadd -g $gid $group\"\necho \"useradd -g $group $user1\"\necho \"useradd -g $group $user2\"\n",
    examples: [{ input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n" }],
    tests: [
      { name: "sample developers", input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n", visible: true },
      { name: "qa group", input: "qa 2100 tester1 tester2\n", expectedOutput: "groupadd -g 2100 qa\nuseradd -g qa tester1\nuseradd -g qa tester2\n", visible: true },
      { name: "sysadmin group", input: "sysadmin 500 root1 root2\n", expectedOutput: "groupadd -g 500 sysadmin\nuseradd -g sysadmin root1\nuseradd -g sysadmin root2\n", visible: true },
      { name: "ops group", input: "ops 2200 ops1 ops2\n", expectedOutput: "groupadd -g 2200 ops\nuseradd -g ops ops1\nuseradd -g ops ops2\n", visible: false },
      { name: "guest group", input: "guest 9999 guest1 guest2\n", expectedOutput: "groupadd -g 9999 guest\nuseradd -g guest guest1\nuseradd -g guest guest2\n", visible: false }
    ]
  },
  {
    id: "bash-015",
    title: "File Archiving",
    difficulty: "Easy",
    tags: ["ST-1", "tar", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "In the virtual terminal, create `sub1.txt` to `sub5.txt` and archive them into `result.tar`.",
    constraints: ["Use real commands.", "Use `touch` and `tar -cf`.", "Do not echo the commands."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntouch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\ntar -cf result.tar sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n",
    examples: [{ input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n" }],
    tests: [
      { name: "archive created", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "tar command executed", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "file check", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "hidden archive check", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: false },
      { name: "hidden command check", input: "", expectedOutput: "result.tar: sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: false }
    ]
  },
  {
    id: "bash-016",
    title: "Directory Structure",
    difficulty: "Easy",
    tags: ["ST-1", "directories", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Create `Projects/frontend` and `Projects/backend`, then create `index.html` inside `Projects/frontend`.",
    constraints: ["Use real filesystem commands.", "End by listing `Projects/frontend` so the checker can verify the file."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nmkdir -p Projects/frontend Projects/backend\ntouch Projects/frontend/index.html\nls Projects/frontend\n",
    examples: [{ input: "", expectedOutput: "index.html\n" }],
    tests: [
      { name: "frontend file visible", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "directory listing", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "backend check", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "hidden structure check", input: "", expectedOutput: "index.html\n", visible: false },
      { name: "hidden mkdir check", input: "", expectedOutput: "index.html\n", visible: false }
    ]
  },
  {
    id: "bash-017",
    title: "System Information Script",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read username, UID, GID, kernel name, month, and year. Print the requested system information lines.",
    constraints: ["Input format: USER UID GID KERNEL MONTH YEAR.", "Print labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread user uid gid kernel month year\necho \"User: $user\"\necho \"UID: $uid\"\necho \"GID: $gid\"\necho \"Kernel: $kernel\"\necho \"Calendar: $month $year\"\n",
    examples: [{ input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n" }],
    tests: [
      { name: "sample student", input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "admin account", input: "admin 0 0 Linux Dec 2026\n", expectedOutput: "User: admin\nUID: 0\nGID: 0\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "root user", input: "root 0 0 Unix Jan 1970\n", expectedOutput: "User: root\nUID: 0\nGID: 0\nKernel: Unix\nCalendar: Jan 1970\n", visible: true },
      { name: "service account", input: "svc 120 130 Linux Jan 2027\n", expectedOutput: "User: svc\nUID: 120\nGID: 130\nKernel: Linux\nCalendar: Jan 2027\n", visible: false },
      { name: "guest account", input: "guest 5000 5000 Linux Feb 2028\n", expectedOutput: "User: guest\nUID: 5000\nGID: 5000\nKernel: Linux\nCalendar: Feb 2028\n", visible: false }
    ]
  },
  {
    id: "bash-018",
    title: "Permission Management",
    difficulty: "Easy",
    tags: ["ST-1", "chmod", "permissions"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Create `info.txt` and give read/write/execute to the owner, but read-only permission to others.",
    constraints: ["Use `touch` and `chmod 744`.", "Do not echo the command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntouch info.txt\nchmod 744 info.txt\n",
    examples: [{ input: "", expectedOutput: "mode 744 applied to info.txt\n" }],
    tests: [
      { name: "info permission", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: true },
      { name: "chmod executed", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: true },
      { name: "touch check", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: true },
      { name: "hidden mode check", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: false },
      { name: "hidden owner check", input: "", expectedOutput: "mode 744 applied to info.txt\n", visible: false }
    ]
  },
  {
    id: "bash-019",
    title: "File Ownership",
    difficulty: "Easy",
    tags: ["ST-1", "chown", "ownership"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Change the owner of `report.txt` to `samual` and the group to `progteam`.",
    constraints: ["Use `chown owner:group file`.", "Do not echo the answer."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nchown samual:progteam report.txt\n",
    examples: [{ input: "", expectedOutput: "owner samual:progteam applied to report.txt\n" }],
    tests: [
      { name: "owner applied", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: true },
      { name: "group applied", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: true },
      { name: "file report check", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: true },
      { name: "hidden ownership check", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: false },
      { name: "hidden group check", input: "", expectedOutput: "owner samual:progteam applied to report.txt\n", visible: false }
    ]
  },
  {
    id: "bash-020",
    title: "File Search & Filter",
    difficulty: "Easy",
    tags: ["ST-1", "head", "tail"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Display only the first 6 lines and last 4 lines of `/etc/shadow`.",
    constraints: ["Use real `head` and `tail` commands.", "Do not echo command text."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nhead -n 6 /etc/shadow\ntail -n 4 /etc/shadow\n",
    examples: [{ input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n" }],
    tests: [
      { name: "first and last lines", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: true },
      { name: "head tail commands", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: true },
      { name: "line count check", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: true },
      { name: "hidden shadow check", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: false },
      { name: "hidden content check", input: "", expectedOutput: "root:*:19123:0:99999:7:::\ndaemon:*:19123:0:99999:7:::\nbin:*:19123:0:99999:7:::\nsys:*:19123:0:99999:7:::\nsync:*:19123:0:99999:7:::\ngames:*:19123:0:99999:7:::\nman:*:19123:0:99999:7:::\nlp:*:19123:0:99999:7:::\nmail:*:19123:0:99999:7:::\nnews:*:19123:0:99999:7:::\n", visible: false }
    ]
  },
  {
    id: "bash-021",
    title: "Count Elements",
    difficulty: "Easy",
    tags: ["ST-1", "wc", "files"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Count the total number of lines in `/etc/passwd`.",
    constraints: ["Use `wc -l`.", "Do not echo the expected count."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nwc -l /etc/passwd\n",
    examples: [{ input: "", expectedOutput: "10\n" }],
    tests: [
      { name: "passwd count", input: "", expectedOutput: "10\n", visible: true },
      { name: "wc command", input: "", expectedOutput: "10\n", visible: true },
      { name: "passwd file access", input: "", expectedOutput: "10\n", visible: true },
      { name: "hidden line count", input: "", expectedOutput: "10\n", visible: false },
      { name: "hidden tool check", input: "", expectedOutput: "10\n", visible: false }
    ]
  },
  {
    id: "bash-022",
    title: "Rectangle Perimeter",
    difficulty: "Easy",
    tags: ["ST-1", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read length and breadth, then print the perimeter of the rectangle.",
    constraints: ["Input contains two integers: L B.", "Output only the perimeter value."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread l b\necho \"$((l * 2 + b * 2))\"\n",
    examples: [{ input: "5 3\n", expectedOutput: "16\n" }],
    tests: [
      { name: "sample rectangle", input: "5 3\n", expectedOutput: "16\n", visible: true },
      { name: "square", input: "4 4\n", expectedOutput: "16\n", visible: true },
      { name: "tiny rectangle", input: "1 1\n", expectedOutput: "4\n", visible: true },
      { name: "large rectangle", input: "10 7\n", expectedOutput: "34\n", visible: false },
      { name: "long rectangle", input: "100 2\n", expectedOutput: "204\n", visible: false }
    ]
  },
  {
    id: "bash-023",
    title: "FizzBuzz Logic",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print numbers from 1 to n, replacing multiples of 3 with Fizz, 5 with Buzz, and both with FizzBuzz.",
    constraints: ["Input contains one integer.", "Print one value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nfor ((i=1; i<=n; i++)); do\n  if [ $((i % 15)) -eq 0 ]; then\n    echo \"FizzBuzz\"\n  elif [ $((i % 3)) -eq 0 ]; then\n    echo \"Fizz\"\n  elif [ $((i % 5)) -eq 0 ]; then\n    echo \"Buzz\"\n  else\n    echo \"$i\"\n  fi\ndone\n",
    examples: [{ input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n", visible: true },
      { name: "six values", input: "6\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n", visible: true },
      { name: "fifteen values", input: "15\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n", visible: true },
      { name: "one value", input: "1\n", expectedOutput: "1\n", visible: false },
      { name: "thirty values", input: "30\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n", visible: false }
    ]
  },
  {
    id: "bash-024",
    title: "Star Patterns",
    difficulty: "Easy",
    tags: ["ST-2", "nested-loops", "patterns"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print a right-angled star pattern with n rows.",
    constraints: ["Input contains one integer.", "Each row adds one star."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nfor ((i=1; i<=n; i++)); do\n  row=\"\"\n  for ((j=1; j<=i; j++)); do\n    row=\"${row}*\"\n  done\n  echo \"$row\"\ndone\n",
    examples: [{ input: "3\n", expectedOutput: "*\n**\n***\n" }],
    tests: [
      { name: "sample three", input: "3\n", expectedOutput: "*\n**\n***\n", visible: true },
      { name: "four rows", input: "4\n", expectedOutput: "*\n**\n***\n****\n", visible: true },
      { name: "one row", input: "1\n", expectedOutput: "*\n", visible: true },
      { name: "five rows", input: "5\n", expectedOutput: "*\n**\n***\n****\n*****\n", visible: false },
      { name: "seven rows", input: "7\n", expectedOutput: "*\n**\n***\n****\n*****\n******\n*******\n", visible: false }
    ]
  },
  {
    id: "bash-025",
    title: "Math Problems",
    difficulty: "Medium",
    tags: ["ST-2", "while", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a number and print its sum of digits, reverse, and the factorial of the sum of digits.",
    constraints: ["Input contains one positive integer.", "Print three labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nsum=0\ntemp=$n\nwhile [ $temp -gt 0 ]; do\n  digit=$((temp % 10))\n  sum=$((sum + digit))\n  temp=$((temp / 10))\ndone\nrev=0\ntemp=$n\nwhile [ $temp -gt 0 ]; do\n  digit=$((temp % 10))\n  rev=$((rev * 10 + digit))\n  temp=$((temp / 10))\ndone\nfact=1\nfor ((i=1; i<=sum; i++)); do\n  fact=$((fact * i))\ndone\necho \"Sum = $sum\"\necho \"Reverse = $rev\"\necho \"Factorial = $fact\"\n",
    examples: [{ input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 720\n" }],
    tests: [
      { name: "sample 123", input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 720\n", visible: true },
      { name: "405", input: "405\n", expectedOutput: "Sum = 9\nReverse = 504\nFactorial = 362880\n", visible: true },
      { name: "single digit", input: "5\n", expectedOutput: "Sum = 5\nReverse = 5\nFactorial = 120\n", visible: true },
      { name: "321", input: "321\n", expectedOutput: "Sum = 6\nReverse = 123\nFactorial = 720\n", visible: false },
      { name: "large number", input: "111\n", expectedOutput: "Sum = 3\nReverse = 111\nFactorial = 6\n", visible: false }
    ]
  },
  {
    id: "bash-026",
    title: "Fibonacci Series",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "series"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print the Fibonacci series up to n terms.",
    constraints: ["Input contains one integer.", "Print numbers space-separated on one line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\na=0\nb=1\nout=\"\"\nfor ((i=0; i<n; i++)); do\n  out=\"$out $a\"\n  fn=$((a + b))\n  a=$b\n  b=$fn\ndone\necho \"${out:1}\"\n",
    examples: [{ input: "5\n", expectedOutput: "0 1 1 2 3\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "0 1 1 2 3\n", visible: true },
      { name: "seven terms", input: "7\n", expectedOutput: "0 1 1 2 3 5 8\n", visible: true },
      { name: "two terms", input: "2\n", expectedOutput: "0 1\n", visible: true },
      { name: "four terms", input: "4\n", expectedOutput: "0 1 1 2\n", visible: false },
      { name: "ten terms", input: "10\n", expectedOutput: "0 1 1 2 3 5 8 13 21 34\n", visible: false }
    ]
  },
  {
    id: "bash-027",
    title: "Menu-Driven Program",
    difficulty: "Medium",
    tags: ["ST-2", "menu", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a menu choice, two numbers, and a shell name. Choice 1 adds numbers, 2 checks even/odd for the first number, and 3 prints the shell.",
    constraints: ["Input line format: CHOICE A B SHELL.", "Use exact labels from the examples."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread choice a b shell\nif [ \"$choice\" -eq 1 ]; then\n  echo \"Sum = $((a + b))\"\nelif [ \"$choice\" -eq 2 ] && [ $((a % 2)) -eq 0 ]; then\n  echo \"Even\"\nelif [ \"$choice\" -eq 2 ]; then\n  echo \"Odd\"\nelse\n  echo \"Shell = $shell\"\nfi\n",
    examples: [{ input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n" }],
    tests: [
      { name: "sample add", input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "even check", input: "2 10 0 /bin/zsh\n", expectedOutput: "Even\n", visible: true },
      { name: "odd check", input: "2 7 0 /bin/sh\n", expectedOutput: "Odd\n", visible: true },
      { name: "shell print", input: "3 0 0 /bin/bash\n", expectedOutput: "Shell = /bin/bash\n", visible: false },
      { name: "large add", input: "1 100 200 /bin/bash\n", expectedOutput: "Sum = 300\n", visible: false }
    ]
  },
  {
    id: "bash-028",
    title: "Array Sorting",
    difficulty: "Medium",
    tags: ["ST-2", "arrays", "sorting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read three integers and print them sorted in ascending order.",
    constraints: ["Input contains three integers.", "Output them space-separated."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread a b c\nif [ $a -gt $b ]; then t=$a; a=$b; b=$t; fi\nif [ $a -gt $c ]; then t=$a; a=$c; c=$t; fi\nif [ $b -gt $c ]; then t=$b; b=$c; c=$t; fi\necho \"$a $b $c\"\n",
    examples: [{ input: "3 1 2\n", expectedOutput: "1 2 3\n" }],
    tests: [
      { name: "sample mixed", input: "3 1 2\n", expectedOutput: "1 2 3\n", visible: true },
      { name: "descending odd", input: "9 5 7\n", expectedOutput: "5 7 9\n", visible: true },
      { name: "negative mixed", input: "0 -5 2\n", expectedOutput: "-5 0 2\n", visible: true },
      { name: "already sorted", input: "4 6 8\n", expectedOutput: "4 6 8\n", visible: false },
      { name: "all equal", input: "5 5 5\n", expectedOutput: "5 5 5\n", visible: false }
    ]
  },
  {
    id: "bash-029",
    title: "Substring Extraction",
    difficulty: "Easy",
    tags: ["ST-2", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a string, start position, and length. Print the extracted substring.",
    constraints: ["Input format: STRING POSITION LENGTH.", "Use zero-based position."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread str pos len\necho \"${str:$pos:$len}\"\n",
    examples: [{ input: "linuxshell 5 5\n", expectedOutput: "shell\n" }],
    tests: [
      { name: "sample shell", input: "linuxshell 5 5\n", expectedOutput: "shell\n", visible: true },
      { name: "network", input: "networking 3 4\n", expectedOutput: "work\n", visible: true },
      { name: "full string", input: "hello 0 5\n", expectedOutput: "hello\n", visible: true },
      { name: "bashscript", input: "bashscript 4 6\n", expectedOutput: "script\n", visible: false },
      { name: "single char", input: "linux 0 1\n", expectedOutput: "l\n", visible: false }
    ]
  },
  {
    id: "bash-030",
    title: "Advanced Filtering",
    difficulty: "Easy",
    tags: ["ST-2", "filtering", "sort"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "List all files in `/var/log` ending with `.log` and display them sorted in reverse order.",
    constraints: ["Use `ls` and `sort -r` with a pipe.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nls /var/log/*.log | sort -r\n",
    examples: [{ input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n" }],
    tests: [
      { name: "reverse logs", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: true },
      { name: "pipe sort", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: true },
      { name: "log count check", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: true },
      { name: "hidden filter check", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: false },
      { name: "hidden sort check", input: "", expectedOutput: "/var/log/server.log\n/var/log/app.log\n", visible: false }
    ]
  },
  {
    id: "bash-031",
    title: "Error Capturing",
    difficulty: "Easy",
    tags: ["ST-2", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Redirect matching `error` lines from `/var/log/server.log` into `errors.log`, then display `errors.log`.",
    constraints: ["Use `grep` with `>` redirection.", "End with `cat errors.log` so the checker can verify the file."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ngrep error /var/log/server.log > errors.log\ncat errors.log\n",
    examples: [{ input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n" }],
    tests: [
      { name: "redirect errors", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "cat redirected file", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "file error.log check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "hidden redirection check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false },
      { name: "hidden grep check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false }
    ]
  },
  {
    id: "bash-032",
    title: "LVM Management",
    difficulty: "Medium",
    tags: ["ST-2", "lvm", "filesystem"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Extend logical volume `/dev/vg0/lv_data` by 10GB and resize the ext4 filesystem.",
    constraints: ["Use `lvextend -L +10G`.", "Run `resize2fs` on the same logical volume."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nlvextend -L +10G /dev/vg0/lv_data\nresize2fs /dev/vg0/lv_data\n",
    examples: [{ input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n" }],
    tests: [
      { name: "extend volume", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: true },
      { name: "resize filesystem", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: true },
      { name: "volume path check", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: true },
      { name: "hidden lvm check", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: false },
      { name: "hidden resize check", input: "", expectedOutput: "Size of logical volume /dev/vg0/lv_data changed by +10G.\nFilesystem resized on /dev/vg0/lv_data.\n", visible: false }
    ]
  },
  {
    id: "bash-033",
    title: "Network Traffic Monitor",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Capture incoming traffic on `eth0` from IP `192.168.1.50` on port `80`.",
    constraints: ["Use `tcpdump -i eth0`.", "Filter by source IP and destination port.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntcpdump -i eth0 src 192.168.1.50 and dst port 80\n",
    examples: [{ input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n" }],
    tests: [
      { name: "eth0 capture", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "packet output", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "port 80 check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: true },
      { name: "hidden capture check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: false },
      { name: "hidden source check", input: "", expectedOutput: "listening on eth0\nIP 192.168.1.50.54321 > 192.168.1.100.80: Flags [S]\n", visible: false }
    ]
  },
  {
    id: "bash-034",
    title: "Secure Backup",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Create a compressed `.tar.gz` backup of `/etc/configs` named `config_backup.tar.gz`.",
    constraints: ["Use `tar -czf`.", "Do not echo the command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ntar -czf config_backup.tar.gz /etc/configs\n",
    examples: [{ input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n" }],
    tests: [
      { name: "backup created", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: true },
      { name: "tar gzip command", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: true },
      { name: "file existence check", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: true },
      { name: "hidden backup check", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: false },
      { name: "hidden compression check", input: "", expectedOutput: "config_backup.tar.gz: /etc/configs\n", visible: false }
    ]
  },
  {
    id: "bash-035",
    title: "Remote Network Safety",
    difficulty: "Medium",
    tags: ["End Term", "netplan", "safety"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Run the safe Netplan sequence to validate configuration before applying it permanently.",
    constraints: ["Use `netplan generate`.", "Use `netplan try` before `netplan apply`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nnetplan generate\nnetplan try\nnetplan apply\n",
    examples: [{ input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n" }],
    tests: [
      { name: "safe validation", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: true },
      { name: "rollback-safe apply", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: true },
      { name: "sequence check", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: true },
      { name: "hidden netplan check", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: false },
      { name: "hidden generate check", input: "", expectedOutput: "Generated netplan configuration.\nConfiguration accepted. Rollback timer cancelled.\nApplied netplan configuration.\n", visible: false }
    ]
  },
  {
    id: "bash-036",
    title: "SSH Security Setup",
    difficulty: "Easy",
    tags: ["End Term", "ufw", "ssh"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Check UFW status, allow SSH on port 22, and then enable the firewall.",
    constraints: ["Use real `ufw` commands.", "Do not echo the command sequence."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nufw status\nufw allow 22/tcp\nufw enable\n",
    examples: [{ input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n" }],
    tests: [
      { name: "ssh firewall", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: true },
      { name: "ufw enabled", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: true },
      { name: "rule 22 check", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: true },
      { name: "hidden firewall check", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: false },
      { name: "hidden status check", input: "", expectedOutput: "Status: inactive\nRule added: 22/tcp\nFirewall is active and enabled on system startup.\n", visible: false }
    ]
  },
  {
    id: "bash-037",
    title: "System Troubleshooting",
    difficulty: "Easy",
    tags: ["End Term", "dmesg", "logs"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "View the last 3 lines of the kernel ring buffer to diagnose hardware issues.",
    constraints: ["Use `dmesg` piped into `tail -n 3`.", "Do not echo expected output."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ndmesg | tail -n 3\n",
    examples: [{ input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n" }],
    tests: [
      { name: "kernel tail", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: true },
      { name: "pipe tail", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: true },
      { name: "dmesg access", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: true },
      { name: "hidden dmesg check", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: false },
      { name: "hidden line check", input: "", expectedOutput: "[2.100000] EXT4-fs mounted filesystem\n[4.500000] usb 1-1: new high-speed USB device\n[8.000000] audit: system ready\n", visible: false }
    ]
  },
  {
    id: "bash-038",
    title: "Log Analysis",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    kind: "terminal",
    prompt: "Find all lines containing `error` in `/var/log/server.log`, save them to `errors.txt`, then display the saved file.",
    constraints: ["Use `grep error ... > errors.txt`.", "End with `cat errors.txt`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ngrep error /var/log/server.log > errors.txt\ncat errors.txt\n",
    examples: [{ input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n" }],
    tests: [
      { name: "saved errors", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "cat errors file", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "log existence", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: true },
      { name: "hidden log check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false },
      { name: "hidden cat check", input: "", expectedOutput: "error: database unavailable\nerror: request timed out\n", visible: false }
    ]
  },
  {
    id: "bash-039",
    title: "String Reversal Function",
    difficulty: "Medium",
    tags: ["PT1", "functions", "strings"],
    source: "more.json",
    kind: "script",
    prompt: "Write a shell script using a function named reverse_string() that accepts a string and displays the reversed string. The script should read the input from the file `input.txt` and call the function with its contents.",
    constraints: ["Read `input.txt`.", "Use a function named `reverse_string`."],
    starterCode: "#!/usr/bin/env bash\n\nreverse_string() {\n  # Write function here\n}\n\n# read input.txt\n",
    solutionCode: "#!/usr/bin/env bash\n# read input.txt\nreverse_string() {\n  echo \"$1\" | rev\n}\ninput=$(cat input.txt)\nreverse_string \"$input\"\n",
    examples: [{ input: "hello", expectedOutput: "olleh\n" }],
    tests: [
      { name: "hello check", input: "hello", expectedOutput: "olleh\n", visible: true },
      { name: "world check", input: "world", expectedOutput: "dlrow\n", visible: true },
      { name: "longer check", input: "interactive script tests", expectedOutput: "stset tpircs evitcaretni\n", visible: false }
    ]
  },
  {
    id: "bash-040",
    title: "System Memory and Process Snapshot",
    difficulty: "Medium",
    tags: ["PT1", "free", "ps", "redirection"],
    source: "more.json",
    kind: "terminal",
    prompt: "Capture a snapshot of system memory and process count:\n1. Use the `free` command to check memory and save output to `memory.txt`.\n2. Use the `ps` command to list all running processes and save to `processes.txt`.\n3. Count total number of processes (lines) in `processes.txt`.\n4. Append text 'Process Check Complete' to `final_status.txt`.",
    constraints: ["Redirect `free` to `memory.txt`.", "Redirect `ps` to `processes.txt`.", "Append complete message to `final_status.txt`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nfree > memory.txt\nps -e > processes.txt\nwc -l < processes.txt > /dev/null\necho \"Process Check Complete\" >> final_status.txt\n",
    appendTestCode: "cat final_status.txt\nif [ -f memory.txt ] && [ -f processes.txt ]; then\n  echo \"Files Created\"\nfi",
    examples: [{ input: "", expectedOutput: "Process Check Complete\nFiles Created\n" }],
    tests: [
      { name: "status validation", input: "", expectedOutput: "Process Check Complete\nFiles Created\n", visible: true },
      { name: "memory check", input: "", expectedOutput: "Process Check Complete\nFiles Created\n", visible: true },
      { name: "processes check", input: "", expectedOutput: "Process Check Complete\nFiles Created\n", visible: false }
    ]
  },
  {
    id: "bash-041",
    title: "Text Processing (Sorting Employees)",
    difficulty: "Medium",
    tags: ["PT1", "cut", "sort", "head"],
    source: "more.json",
    kind: "terminal",
    prompt: "Given `employees.txt` (Format: Name, Department, Salary):\n1. Extract only the first column (Names) from the file using `cut` (delimiter comma).\n2. Sort these names in reverse alphabetical order.\n3. Save sorted names into `sorted_staff.txt`.\n4. Display the first 2 names from the sorted file.",
    constraints: ["Use `cut` with comma delimiter.", "Sort in reverse order.", "Display first 2 lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ncut -d ',' -f1 employees.txt > names.txt\nsort -r names.txt > sorted_staff.txt\nhead -n 2 sorted_staff.txt\n",
    appendTestCode: "if [ -f sorted_staff.txt ]; then\n  echo \"File Saved\"\nfi",
    examples: [{ input: "", expectedOutput: "John Doe\nJane Smith\nFile Saved\n" }],
    tests: [
      { name: "head output check", input: "", expectedOutput: "John Doe\nJane Smith\nFile Saved\n", visible: true },
      { name: "file check", input: "", expectedOutput: "John Doe\nJane Smith\nFile Saved\n", visible: true },
      { name: "sorting check", input: "", expectedOutput: "John Doe\nJane Smith\nFile Saved\n", visible: false }
    ]
  },
  {
    id: "bash-042",
    title: "Advanced Archiving and Cleanup",
    difficulty: "Medium",
    tags: ["PT1", "mkdir", "tar", "rm"],
    source: "more.json",
    kind: "terminal",
    prompt: "Prepare a backup of configuration:\n1. Create a directory named `deploy_cfg`.\n2. Create three files inside it: `v1.conf`, `v2.conf`, and `readme.txt`.\n3. Create compressed tar archive `config_backup.tar.gz` of the `deploy_cfg` directory.\n4. List the contents of current directory to verify the archive exists.\n5. Remove the `deploy_cfg` directory.",
    constraints: ["Create directory `deploy_cfg`.", "Use `tar -czf config_backup.tar.gz`.", "Delete directory `deploy_cfg`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nmkdir deploy_cfg\ntouch deploy_cfg/v1.conf deploy_cfg/v2.conf deploy_cfg/readme.txt\ntar -czf config_backup.tar.gz deploy_cfg\nls | grep config_backup.tar.gz\nrm -rf deploy_cfg\n",
    appendTestCode: "if [ ! -d deploy_cfg ]; then\n  echo \"Cleaned Up\"\nfi",
    examples: [{ input: "", expectedOutput: "config_backup.tar.gz: deploy_cfg\nconfig_backup.tar.gz\nCleaned Up\n" }],
    tests: [
      { name: "tar archive validation", input: "", expectedOutput: "config_backup.tar.gz: deploy_cfg\nconfig_backup.tar.gz\nCleaned Up\n", visible: true },
      { name: "clean validation", input: "", expectedOutput: "config_backup.tar.gz: deploy_cfg\nconfig_backup.tar.gz\nCleaned Up\n", visible: true },
      { name: "hidden directory check", input: "", expectedOutput: "config_backup.tar.gz: deploy_cfg\nconfig_backup.tar.gz\nCleaned Up\n", visible: false }
    ]
  },
  {
    id: "bash-043",
    title: "File Existence Test",
    difficulty: "Easy",
    tags: ["PT1", "files", "conditionals"],
    source: "more-1.json",
    kind: "script",
    prompt: "Write a script that checks if a file named config.txt exists in the current directory. If it does, display its contents using cat; otherwise, print 'File not found'.",
    constraints: ["Check if config.txt exists.", "Use cat if file exists.", "Print 'File not found' otherwise."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nif [ -f \"config.txt\" ]; then\n    cat config.txt\nelse\n    echo \"File not found\"\nfi\n",
    prependTestCode: "read -r test_input\nif [[ \"$test_input\" =~ \"Hello\" ]]; then\n  echo \"Hello World\" > config.txt\nelif [[ \"$test_input\" =~ \"multiple\" ]]; then\n  echo \"All file contents displayed\" > config.txt\nelse\n  rm -f config.txt\nfi",
    examples: [{ input: "config.txt exists and contains 'Hello World'", expectedOutput: "Hello World\n" }],
    tests: [
      { name: "file exists check", input: "config.txt exists and contains 'Hello World'", expectedOutput: "Hello World\n", visible: true },
      { name: "multiple lines check", input: "config.txt exists and contains multiple lines", expectedOutput: "All file contents displayed\n", visible: true },
      { name: "file missing check", input: "config.txt does not exist", expectedOutput: "File not found\n", visible: false }
    ]
  },
  {
    id: "bash-044",
    title: "Number Comparison (Root Check)",
    difficulty: "Easy",
    tags: ["PT1", "id", "conditionals"],
    source: "more-1.json",
    kind: "script",
    prompt: "Write a script that checks if the user running the script is the root user (UID 0). If not, echo 'Please run as root' and exit the script.",
    constraints: ["Check if running user UID is 0.", "Exit with status if not root."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nif [ $(id -u) -ne 0 ]; then\n    echo \"Please run as root\"\n    exit 1\nfi\necho \"Running as root!\"\n",
    prependTestCode: "read -r test_input\nif [[ \"$test_input\" =~ \"UID=0\" ]]; then\n  MOCK_UID=0\nelif [[ \"$test_input\" =~ \"UID=501\" ]]; then\n  MOCK_UID=501\nelse\n  MOCK_UID=1000\nfi",
    examples: [{ input: "UID=0", expectedOutput: "Running as root!\n" }],
    tests: [
      { name: "root user check", input: "UID=0", expectedOutput: "Running as root!\n", visible: true },
      { name: "normal user check", input: "UID=1000", expectedOutput: "Please run as root\n", visible: true },
      { name: "other user check", input: "UID=501", expectedOutput: "Please run as root\n", visible: false }
    ]
  },
  {
    id: "bash-045",
    title: "Case Statement for Service Management",
    difficulty: "Easy",
    tags: ["PT1", "case", "service"],
    source: "more-1.json",
    kind: "script",
    prompt: "Write a script that takes a single positional parameter (start, stop, or restart). Use a case command to handle start, stop, restart, and any other parameter.",
    constraints: ["Use case statement.", "Support start, stop, restart.", "Handle invalid choices."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\ncase \"$1\" in\n    start) echo \"Starting...\" ;;\n    stop) echo \"Stopping...\" ;;\n    restart) echo \"Restarting...\" ;;\n    *) echo \"Usage: script.sh {start|stop|restart}\" ;;\nesac\n",
    examples: [{ input: "start", expectedOutput: "Starting...\n" }],
    tests: [
      { name: "start parameter", input: "start", expectedOutput: "Starting...\n", visible: true },
      { name: "stop parameter", input: "stop", expectedOutput: "Stopping...\n", visible: true },
      { name: "restart parameter", input: "restart", expectedOutput: "Restarting...\n", visible: true },
      { name: "invalid parameter", input: "reload", expectedOutput: "Usage: script.sh {start|stop|restart}\n", visible: false },
      { name: "empty parameter", input: "", expectedOutput: "Usage: script.sh {start|stop|restart}\n", visible: false }
    ]
  },
  {
    id: "bash-046",
    title: "For Loop & User Creation",
    difficulty: "Easy",
    tags: ["PT1", "for-loop", "users"],
    source: "more-1.json",
    kind: "script",
    prompt: "Write a script using a for loop to iterate through a list of names (alice, bob, charlie) and echo adduser commands.",
    constraints: ["Iterate over alice bob charlie.", "Print adduser command for each."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nfor user in alice bob charlie; do\n    echo \"adduser $user\"\ndone\n",
    examples: [{ input: "", expectedOutput: "adduser alice\nadduser bob\nadduser charlie\n" }],
    tests: [
      { name: "user list check", input: "", expectedOutput: "adduser alice\nadduser bob\nadduser charlie\n", visible: true },
      { name: "alternate check", input: "Empty list", expectedOutput: "adduser alice\nadduser bob\nadduser charlie\n", visible: true },
      { name: "hidden check", input: "List contains one user", expectedOutput: "adduser alice\nadduser bob\nadduser charlie\n", visible: false }
    ]
  },
  {
    id: "bash-047",
    title: "While Loop File Reading",
    difficulty: "Medium",
    tags: ["PT1", "while-loop", "read-file"],
    source: "more-1.json",
    kind: "script",
    prompt: "Read servers.txt line by line and prefix each line with 'Server: '.",
    constraints: ["Read from servers.txt.", "Prefix each line with 'Server: '."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nwhile read line; do\n    echo \"Server: $line\"\ndone < servers.txt\n",
    prependTestCode: "PREPEND_PHASE=1\nrm -f servers.txt\nwhile read -r test_line; do\n  if [[ \"$test_line\" =~ \"Empty file\" ]]; then\n    touch servers.txt\n  elif [[ \"$test_line\" =~ \"Lines with spaces\" ]]; then\n    echo \"web server 1\" > servers.txt\n    echo \"db server 2\" >> servers.txt\n  elif [[ \"$test_line\" =~ \"100 server entries\" ]]; then\n    for ((i=1; i<=10; i++)); do\n      echo \"server$i\" >> servers.txt\n    done\n  else\n    echo \"$test_line\" >> servers.txt\n  fi\ndone\nPREPEND_PHASE=0",
    examples: [{ input: "server1\n", expectedOutput: "Server: server1\n" }],
    tests: [
      { name: "single server check", input: "server1\n", expectedOutput: "Server: server1\n", visible: true },
      { name: "multiple servers check", input: "server1\nserver2\nserver3\n", expectedOutput: "Server: server1\nServer: server2\nServer: server3\n", visible: true },
      { name: "empty file check", input: "Empty file\n", expectedOutput: "", visible: true },
      { name: "spaces check", input: "Lines with spaces\n", expectedOutput: "Server: web server 1\nServer: db server 2\n", visible: false },
      { name: "multiple entries check", input: "100 server entries\n", expectedOutput: "Server: server1\nServer: server2\nServer: server3\nServer: server4\nServer: server5\nServer: server6\nServer: server7\nServer: server8\nServer: server9\nServer: server10\n", visible: false }
    ]
  },
  {
    id: "bash-048",
    title: "Positional Parameters and Arithmetic",
    difficulty: "Easy",
    tags: ["PT1", "positional-parameters", "arithmetic"],
    source: "more-1.json",
    kind: "script",
    prompt: "Take two numbers as positional parameters and print their sum in the format 'The sum is: <sum>'.",
    constraints: ["Access $1 and $2.", "Print 'The sum is: <sum>'."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nnum1=$1\nnum2=$2\nsum=$((num1 + num2))\necho \"The sum is: $sum\"\n",
    examples: [{ input: "5 10", expectedOutput: "The sum is: 15\n" }],
    tests: [
      { name: "positive numbers", input: "5 10", expectedOutput: "The sum is: 15\n", visible: true },
      { name: "negative numbers", input: "-5 3", expectedOutput: "The sum is: -2\n", visible: true },
      { name: "zero check", input: "0 0", expectedOutput: "The sum is: 0\n", visible: true },
      { name: "large numbers", input: "99999 1", expectedOutput: "The sum is: 100000\n", visible: false },
      { name: "mixed check", input: "100 -25", expectedOutput: "The sum is: 75\n", visible: false }
    ]
  },
  {
    id: "bash-049",
    title: "Functions Taking Parameters",
    difficulty: "Easy",
    tags: ["PT1", "functions", "tar"],
    source: "more-1.json",
    kind: "script",
    prompt: "Create a function named create_backup that accepts a target directory, runs tar to create 'backup.tar.gz' and displays a message.",
    constraints: ["Use function create_backup.", "Call tar inside function.", "Display 'Backup created for <dir>'."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\ncreate_backup() {\n    target_dir=$1\n    tar -czf \"backup.tar.gz\" \"$target_dir\"\n    echo \"Backup created for $target_dir\"\n}\ncreate_backup \"/etc\"\n",
    examples: [{ input: "", expectedOutput: "backup.tar.gz: /etc\nBackup created for /etc\n" }],
    tests: [
      { name: "etc backup check", input: "", expectedOutput: "backup.tar.gz: /etc\nBackup created for /etc\n", visible: true },
      { name: "default check", input: "", expectedOutput: "backup.tar.gz: /etc\nBackup created for /etc\n", visible: true },
      { name: "hidden check", input: "", expectedOutput: "backup.tar.gz: /etc\nBackup created for /etc\n", visible: false }
    ]
  },
  {
    id: "bash-050",
    title: "Function Returning a String",
    difficulty: "Easy",
    tags: ["PT1", "functions", "date"],
    source: "more-1.json",
    kind: "script",
    prompt: "Write a function get_system_date() that displays the current date (YYYY-MM-DD), and output 'Today's date is <date>'.",
    constraints: ["Define get_system_date.", "Use date '+%Y-%m-%d'.", "Display 'Today's date is <date>'."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nget_system_date() {\n    date \"+%Y-%m-%d\"\n}\nTODAY=$(get_system_date)\necho \"Today's date is $TODAY\"\n",
    prependTestCode: "read -r test_input\nif [[ \"$test_input\" == \"DATE=2026-05-29\" ]]; then\n  MOCK_DATE=\"2026-05-29\"\nelif [[ \"$test_input\" == \"DATE=2025-12-25\" ]]; then\n  MOCK_DATE=\"2025-12-25\"\nelif [[ \"$test_input\" == \"DATE=2024-01-01\" ]]; then\n  MOCK_DATE=\"2024-01-01\"\nfi",
    examples: [{ input: "DATE=2026-05-29", expectedOutput: "Today's date is 2026-05-29\n" }],
    tests: [
      { name: "system date verification", input: "DATE=2026-05-29", expectedOutput: "Today's date is 2026-05-29\n", visible: true },
      { name: "format check", input: "DATE=2025-12-25", expectedOutput: "Today's date is 2025-12-25\n", visible: true },
      { name: "hidden validation", input: "DATE=2024-01-01", expectedOutput: "Today's date is 2024-01-01\n", visible: false }
    ]
  },
  {
    id: "bash-051",
    title: "Advanced String Manipulation",
    difficulty: "Easy",
    tags: ["PT1", "strings", "slicing"],
    source: "more-1.json",
    kind: "script",
    prompt: "Extract the filename 'index.html' from the path '/var/www/html/index.html' using parameter expansion.",
    constraints: ["Define FILE_PATH.", "Use parameter expansion to get filename."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nFILE_PATH=\"/var/www/html/index.html\"\necho \"${FILE_PATH##*/}\"\n",
    appendTestCode: "if [ \"$FILE_PATH\" != \"/var/www/html/index.html\" ]; then echo \"Incorrect FILE_PATH value\"; fi",
    examples: [{ input: "", expectedOutput: "index.html\n" }],
    tests: [
      { name: "filename expansion", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "index path check", input: "", expectedOutput: "index.html\n", visible: true },
      { name: "hidden extraction check", input: "", expectedOutput: "index.html\n", visible: false }
    ]
  },
  {
    id: "bash-052",
    title: "Suffix Removal",
    difficulty: "Easy",
    tags: ["PT1", "strings", "suffix"],
    source: "more-1.json",
    kind: "script",
    prompt: "Remove the .txt extension from FILENAME='report.txt' using parameter expansion.",
    constraints: ["Define FILENAME.", "Use parameter expansion to remove .txt."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nFILENAME=\"report.txt\"\necho \"${FILENAME%.txt}\"\n",
    appendTestCode: "if [ \"$FILENAME\" != \"report.txt\" ]; then echo \"Incorrect FILENAME value\"; fi",
    examples: [{ input: "", expectedOutput: "report\n" }],
    tests: [
      { name: "suffix removal check", input: "", expectedOutput: "report\n", visible: true },
      { name: "report file check", input: "", expectedOutput: "report\n", visible: true },
      { name: "hidden suffix check", input: "", expectedOutput: "report\n", visible: false }
    ]
  },
  {
    id: "bash-053",
    title: "Simple Arrays & Adding Elements",
    difficulty: "Easy",
    tags: ["PT1", "arrays"],
    source: "more-1.json",
    kind: "script",
    prompt: "Create array services with 'ssh' and 'apache2'. Append 'mysql' to it and print all elements.",
    constraints: ["Initialize array services.", "Append 'mysql'.", "Print elements using ${services[@]}."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nservices=(\"ssh\" \"apache2\")\nservices+=(\"mysql\")\necho \"${services[@]}\"\n",
    appendTestCode: "if [ \"${services[2]}\" != \"mysql\" ]; then echo \"Incorrect array elements\"; fi",
    examples: [{ input: "", expectedOutput: "ssh apache2 mysql\n" }],
    tests: [
      { name: "services array check", input: "", expectedOutput: "ssh apache2 mysql\n", visible: true },
      { name: "element append check", input: "", expectedOutput: "ssh apache2 mysql\n", visible: true },
      { name: "hidden array check", input: "", expectedOutput: "ssh apache2 mysql\n", visible: false }
    ]
  },
  {
    id: "bash-054",
    title: "Array Element Deletion",
    difficulty: "Easy",
    tags: ["PT1", "arrays", "unset"],
    source: "more-1.json",
    kind: "script",
    prompt: "Initialize array ips with three addresses. Delete the second element and print the remaining.",
    constraints: ["Initialize ips array.", "Use unset to delete second element.", "Print all remaining elements."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nips=(\"192.168.1.1\" \"10.0.0.1\" \"172.16.0.1\")\nunset ips[1]\necho \"${ips[@]}\"\n",
    appendTestCode: "if [ \"${ips[0]}\" != \"192.168.1.1\" ] || [ \"${ips[1]}\" != \"172.16.0.1\" ]; then echo \"Incorrect ips array\"; fi",
    examples: [{ input: "", expectedOutput: "192.168.1.1 172.16.0.1\n" }],
    tests: [
      { name: "element deletion check", input: "", expectedOutput: "192.168.1.1 172.16.0.1\n", visible: true },
      { name: "ips array check", input: "", expectedOutput: "192.168.1.1 172.16.0.1\n", visible: true },
      { name: "hidden deletion check", input: "", expectedOutput: "192.168.1.1 172.16.0.1\n", visible: false }
    ]
  },
  {
    id: "bash-055",
    title: "Piping, Cut and Sort",
    difficulty: "Medium",
    tags: ["PT1", "cut", "sort", "redirection"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Extract usernames (first column) from passwd_copy.txt (colon-delimited), sort alphabetically, and save to users_list.txt.",
    constraints: ["Use cut with colon delimiter.", "Sort alphabetically.", "Save output to users_list.txt."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ncut -d ':' -f1 passwd_copy.txt | sort > users_list.txt\n",
    prependTestCode: "rm -f passwd_copy.txt\nwhile read -r line; do\n  echo \"$line\" >> passwd_copy.txt\ndone",
    appendTestCode: "cat users_list.txt",
    examples: [{ input: "root:x:0:0\nalice:x:1000:1000\n", expectedOutput: "alice\nroot\n" }],
    tests: [
      { name: "two users sort", input: "root:x:0:0\nalice:x:1000:1000\n", expectedOutput: "alice\nroot\n", visible: true },
      { name: "bob alice check", input: "bob:x:1001\nalice:x:1000\n", expectedOutput: "alice\nbob\n", visible: true },
      { name: "single user check", input: "student:x:1000:1000\n", expectedOutput: "student\n", visible: false }
    ]
  },
  {
    id: "bash-056",
    title: "Streams and Redirection",
    difficulty: "Medium",
    tags: ["PT1", "find", "redirection"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Find all instances of secret.txt under the root directory and save stdout to found.txt while suppressing permission errors.",
    constraints: ["Use find command starting at /.", "Redirect stdout to found.txt.", "Redirect stderr to /dev/null."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nfind / -name \"secret.txt\" > found.txt 2> /dev/null\n",
    prependTestCode: "rm -f /secret.txt /home/student/secret.txt\nread -r test_input\nif [[ \"$test_input\" =~ \"exists\" ]]; then\n  echo \"content\" > /secret.txt\nelif [[ \"$test_input\" =~ \"Multiple\" ]]; then\n  echo \"content1\" > /secret.txt\n  echo \"content2\" > /home/student/secret.txt\nfi",
    appendTestCode: "cat found.txt",
    examples: [{ input: "secret.txt exists", expectedOutput: "/secret.txt\n" }],
    tests: [
      { name: "single secret match", input: "secret.txt exists", expectedOutput: "/secret.txt\n", visible: true },
      { name: "multiple secret matches", input: "Multiple matches", expectedOutput: "/home/student/secret.txt\n/secret.txt\n", visible: true },
      { name: "no secret matches", input: "No matches", expectedOutput: "", visible: false }
    ]
  },
  {
    id: "bash-057",
    title: "Automation with Cron",
    difficulty: "Medium",
    tags: ["PT1", "cron"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Write a single crontab entry that runs /opt/cleanup.sh every Monday at 2:00 AM.",
    constraints: ["Format: Minute Hour Day Month Weekday Command.", "Run at 2:00 AM on Monday (1)."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "0 2 * * 1 /opt/cleanup.sh",
    examples: [{ input: "", expectedOutput: "Cron scheduled successfully\n" }],
    tests: [
      { name: "cron format verification", input: "", expectedOutput: "Cron scheduled successfully\n", visible: true },
      { name: "cron syntax check", input: "", expectedOutput: "Cron scheduled successfully\n", visible: true },
      { name: "hidden cron check", input: "", expectedOutput: "Cron scheduled successfully\n", visible: false }
    ]
  },
  {
    id: "bash-058",
    title: "System Monitoring Logging",
    difficulty: "Medium",
    tags: ["PT1", "df", "free", "logging"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Collect disk space usage (human readable) and memory stats (in MB) and append both to system_health.log.",
    constraints: ["Redirect df -h output.", "Append free -m output.", "Log to system_health.log."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\ndf -h > system_health.log\nfree -m >> system_health.log\n",
    appendTestCode: "cat system_health.log",
    examples: [{ input: "", expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  8.1G   11G  44% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm\n/dev/sdb1        50G   20G   28G  42% /data\n              total        used        free      shared  buff/cache   available\nMem:        8192000     2150000     4096000      234000     1700000     5350000\nSwap:       2048000           0     2048000\n" }],
    tests: [
      { name: "health log check", input: "", expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  8.1G   11G  44% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm\n/dev/sdb1        50G   20G   28G  42% /data\n              total        used        free      shared  buff/cache   available\nMem:        8192000     2150000     4096000      234000     1700000     5350000\nSwap:       2048000           0     2048000\n", visible: true },
      { name: "df and free output", input: "", expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  8.1G   11G  44% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm\n/dev/sdb1        50G   20G   28G  42% /data\n              total        used        free      shared  buff/cache   available\nMem:        8192000     2150000     4096000      234000     1700000     5350000\nSwap:       2048000           0     2048000\n", visible: true },
      { name: "hidden output check", input: "", expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  8.1G   11G  44% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm\n/dev/sdb1        50G   20G   28G  42% /data\n              total        used        free      shared  buff/cache   available\nMem:        8192000     2150000     4096000      234000     1700000     5350000\nSwap:       2048000           0     2048000\n", visible: false }
    ]
  },
  {
    id: "bash-059",
    title: "Firewall Automation (UFW)",
    difficulty: "Medium",
    tags: ["PT1", "ufw", "firewall"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Configure UFW defaults (deny incoming, allow outgoing), allow SSH traffic, and forcefully enable the firewall.",
    constraints: ["Default deny incoming.", "Default allow outgoing.", "Allow ssh.", "Force enable UFW."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nufw default deny incoming\nufw default allow outgoing\nufw allow ssh\nufw --force enable\n",
    appendTestCode: "ufw status",
    examples: [{ input: "", expectedOutput: "Rule added: ssh\nFirewall is active and enabled on system startup.\nStatus: active\nssh\n" }],
    tests: [
      { name: "ufw configuration", input: "", expectedOutput: "Rule added: ssh\nFirewall is active and enabled on system startup.\nStatus: active\nssh\n", visible: true },
      { name: "rule status validation", input: "", expectedOutput: "Rule added: ssh\nFirewall is active and enabled on system startup.\nStatus: active\nssh\n", visible: true },
      { name: "hidden firewall check", input: "", expectedOutput: "Rule added: ssh\nFirewall is active and enabled on system startup.\nStatus: active\nssh\n", visible: false }
    ]
  },
  {
    id: "bash-060",
    title: "Process Monitoring and Exit Status",
    difficulty: "Medium",
    tags: ["PT1", "ping", "conditionals", "status"],
    source: "more-1.json",
    kind: "script",
    prompt: "Ping 8.8.8.8 with 2 packets, suppress output/errors, and print 'Network is Up' on success or 'Network is Down' on failure.",
    constraints: ["Ping 8.8.8.8 with -c 2.", "Redirect output and errors to /dev/null.", "Check $? status."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\n# read check\nping -c 2 8.8.8.8 > /dev/null 2>&1\nif [ $? -eq 0 ]; then\n    echo \"Network is Up\"\nelse\n    echo \"Network is Down\"\nfi\n",
    prependTestCode: "read -r test_input",
    examples: [{ input: "Internet available", expectedOutput: "Network is Up\n" }],
    tests: [
      { name: "ping success", input: "Internet available", expectedOutput: "Network is Up\n", visible: true },
      { name: "ping no internet", input: "No internet", expectedOutput: "Network is Down\n", visible: true },
      { name: "ping firewall blocks", input: "Firewall blocks ping", expectedOutput: "Network is Down\n", visible: true },
      { name: "ping DNS issue", input: "DNS issue but IP reachable", expectedOutput: "Network is Up\n", visible: false },
      { name: "ping packet loss", input: "Packet loss causing ping failure", expectedOutput: "Network is Down\n", visible: false }
    ]
  },
  {
    id: "bash-061",
    title: "File Permissions and Ownership",
    difficulty: "Medium",
    tags: ["PT1", "mkdir", "chmod", "chown"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Create directory app_data, set its ownership to www-data:www-data, and set its permissions to rwx------ (700).",
    constraints: ["Create app_data.", "Change owner/group to www-data.", "Set permissions to 700."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nmkdir app_data\nchown www-data:www-data app_data\nchmod 700 app_data\n",
    appendTestCode: "if [ -d app_data ]; then echo \"Directory Created\"; fi",
    examples: [{ input: "", expectedOutput: "owner www-data:www-data applied to app_data\nmode 700 applied to app_data\nDirectory Created\n" }],
    tests: [
      { name: "permission check", input: "", expectedOutput: "owner www-data:www-data applied to app_data\nmode 700 applied to app_data\nDirectory Created\n", visible: true },
      { name: "owner check", input: "", expectedOutput: "owner www-data:www-data applied to app_data\nmode 700 applied to app_data\nDirectory Created\n", visible: true },
      { name: "hidden directory exists check", input: "", expectedOutput: "owner www-data:www-data applied to app_data\nmode 700 applied to app_data\nDirectory Created\n", visible: false }
    ]
  },
  {
    id: "bash-062",
    title: "LVM Automation Script",
    difficulty: "Medium",
    tags: ["PT1", "lvm"],
    source: "more-1.json",
    kind: "terminal",
    prompt: "Initialize a physical volume on /dev/sdc, create volume group vg_backup on it, and create logical volume lv_archives using 100% free space.",
    constraints: ["Initialize physical volume on /dev/sdc.", "Create volume group vg_backup.", "Create logical volume lv_archives with 100%FREE."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\npvcreate /dev/sdc\nvgcreate vg_backup /dev/sdc\nlvcreate -l 100%FREE -n lv_archives vg_backup\n",
    examples: [{ input: "", expectedOutput: "Physical volume \"/dev/sdc\" successfully created.\nVolume group \"vg_backup\" successfully created\nLogical volume \"lv_archives\" created.\n" }],
    tests: [
      { name: "physical volume setup", input: "", expectedOutput: "Physical volume \"/dev/sdc\" successfully created.\nVolume group \"vg_backup\" successfully created\nLogical volume \"lv_archives\" created.\n", visible: true },
      { name: "volume group setup", input: "", expectedOutput: "Physical volume \"/dev/sdc\" successfully created.\nVolume group \"vg_backup\" successfully created\nLogical volume \"lv_archives\" created.\n", visible: true },
      { name: "hidden logical volume check", input: "", expectedOutput: "Physical volume \"/dev/sdc\" successfully created.\nVolume group \"vg_backup\" successfully created\nLogical volume \"lv_archives\" created.\n", visible: false }
    ]
  }
];

const LINUX_PRACTICE_TEST_1 = [
  {
    type: "mcq",
    title: "Part A — MCQ Quiz (25 questions)",
    sidebarLabel: "A · MCQ Quiz",
    unitIndex: 3
  },
  {
    type: "subjective",
    title: "Part B — Subjective Questions",
    sidebarLabel: "B · Theory Q&A",
    questions: [
      {
        question: "What is the specific systemctl command used to forcefully stop a malfunctioning service named apparmor and then immediately verify its new status?",
        answer: "sudo systemctl stop appamor && sudo systemctl status appamor"
      },
      {
        question: "What is the command to generate a new 4096-bit RSA SSH key pair with a comment 'student key'?",
        answer: "ssh-keygen -t rsa -b 4096 -C \"student key\""
      },
      {
        question: "Use ufw to deny all outgoing traffic to the IP address 192.168.1.100.",
        answer: "ufw deny out to 192.168.1.100"
      },
      {
        question: "How do you create a new Logical Volume (LV) named lv_data with a size of 10GB inside an existing Volume Group (VG) named vg_storage?",
        answer: "lvcreate -L 10G -n lv_data vg_storage"
      },
      {
        question: "Write a command to create a directory named archive and move all files starting with 'data' into it using a single line.",
        answer: "mkdir archieve && mv data* archieve/"
      }
    ]
  },
  {
    type: "coding",
    title: "Part C1 — String Reversal Function",
    sidebarLabel: "C1",
    bashIndex: 38
  },
  {
    type: "coding",
    title: "Part C2 — System Memory and Process Snapshot",
    sidebarLabel: "C2",
    bashIndex: 39
  },
  {
    type: "coding",
    title: "Part C3 — Text Processing (Sorting Employees)",
    sidebarLabel: "C3",
    bashIndex: 40
  },
  {
    type: "coding",
    title: "Part C4 — Advanced Archiving and Cleanup",
    sidebarLabel: "C4",
    bashIndex: 41
  },
  {
    type: "coding",
    title: "Part C5 — File Existence Test",
    sidebarLabel: "C5",
    bashIndex: 42
  },
  {
    type: "coding",
    title: "Part C6 — Number Comparison (Root Check)",
    sidebarLabel: "C6",
    bashIndex: 43
  },
  {
    type: "coding",
    title: "Part C7 — Case Statement for Service Management",
    sidebarLabel: "C7",
    bashIndex: 44
  },
  {
    type: "coding",
    title: "Part C8 — For Loop & User Creation",
    sidebarLabel: "C8",
    bashIndex: 45
  },
  {
    type: "coding",
    title: "Part C9 — While Loop File Reading",
    sidebarLabel: "C9",
    bashIndex: 46
  },
  {
    type: "coding",
    title: "Part C10 — Positional Parameters and Arithmetic",
    sidebarLabel: "C10",
    bashIndex: 47
  },
  {
    type: "coding",
    title: "Part C11 — Functions Taking Parameters",
    sidebarLabel: "C11",
    bashIndex: 48
  },
  {
    type: "coding",
    title: "Part C12 — Function Returning a String",
    sidebarLabel: "C12",
    bashIndex: 49
  },
  {
    type: "coding",
    title: "Part C13 — Advanced String Manipulation",
    sidebarLabel: "C13",
    bashIndex: 50
  },
  {
    type: "coding",
    title: "Part C14 — Suffix Removal",
    sidebarLabel: "C14",
    bashIndex: 51
  },
  {
    type: "coding",
    title: "Part C15 — Simple Arrays & Adding Elements",
    sidebarLabel: "C15",
    bashIndex: 52
  },
  {
    type: "coding",
    title: "Part C16 — Array Element Deletion",
    sidebarLabel: "C16",
    bashIndex: 53
  },
  {
    type: "coding",
    title: "Part C17 — Piping, Cut and Sort",
    sidebarLabel: "C17",
    bashIndex: 54
  },
  {
    type: "coding",
    title: "Part C18 — Streams and Redirection",
    sidebarLabel: "C18",
    bashIndex: 55
  },
  {
    type: "coding",
    title: "Part C19 — Automation with Cron",
    sidebarLabel: "C19",
    bashIndex: 56
  },
  {
    type: "coding",
    title: "Part C20 — System Monitoring Logging",
    sidebarLabel: "C20",
    bashIndex: 57
  },
  {
    type: "coding",
    title: "Part C21 — Firewall Automation (UFW)",
    sidebarLabel: "C21",
    bashIndex: 58
  },
  {
    type: "coding",
    title: "Part C22 — Process Monitoring and Exit Status",
    sidebarLabel: "C22",
    bashIndex: 59
  },
  {
    type: "coding",
    title: "Part C23 — File Permissions and Ownership",
    sidebarLabel: "C23",
    bashIndex: 60
  },
  {
    type: "coding",
    title: "Part C24 — LVM Automation Script",
    sidebarLabel: "C24",
    bashIndex: 61
  }
];
