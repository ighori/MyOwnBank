FROM centos

ENV JAVA_VERSION 8u161
ENV BUILD_VERSION b12

# Upgrading system
RUN yum -y upgrade
RUN yum -y install wget

# Downloading & Config Java 8
RUN wget --no-cookies --no-check-certificate --header "Cookie: oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.rpm" -O /tmp/jdk-8-linux-x64.rpm
RUN yum -y install /tmp/jdk-8-linux-x64.rpm
RUN alternatives --install /usr/bin/java jar /usr/java/latest/bin/java 200000
RUN alternatives --install /usr/bin/javaws javaws /usr/java/latest/bin/javaws 200000
RUN alternatives --install /usr/bin/javac javac /usr/java/latest/bin/javac 200000

#ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64 #This can vary
#ENV PATH $PATH:$JAVA_HOME/bin

EXPOSE 8181

#install Spring Boot artifact
VOLUME /tmp
ADD MyOwnBank-0.0.1-SNAPSHOT.jar MyOwnBank.jar
ADD wily/ /wily/
#RUN sh -c 'touch /Agent.jar'
#RUN sh -c 'touch /MyOwnBank.jar'
#ENTRYPOINT ["/usr/java/latest/bin/java","-Djava.security.egd=file:/dev/./urandom","-jar","/MyOwnBank.jar", "-DagentProfile=/wily/core/config/IntroscopeAgent.profile", "-javaagent:/wily/Agent.jar"]