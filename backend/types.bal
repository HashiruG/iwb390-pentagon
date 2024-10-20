public type Job record {|
    readonly string id;
    *JobInput;
|};

public type JobInput record {|
    string name;
    int phoneNumber;
    string device;
    string date;
|};

public type JobUpdate record {|
    string name;
    int phoneNumber;
    string device;
    string date;
    string status;
|};
